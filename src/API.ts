export interface ProjectArgs {
  archived: boolean;
  visibility: "public" | "internal" | "private";
  order_by:
    | "id"
    | "name"
    | "path"
    | "created_at"
    | "updated_at"
    | "last_activity_at";
  sort: "asc" | "desc";
  search: string;
  search_namespaces: boolean;
  simple: boolean;
  owned: boolean;
  membership: boolean;
  starred: boolean;
  statistics: boolean;
}

export interface Group {
  id: number;
  web_url: string;
  name: string;
  path: string;
  description: string;
  visibility: string;
  share_with_group_lock: boolean;
  require_two_factor_authentication: boolean;
  two_factor_grace_period: number;
  project_creation_level: string;
  auto_devops_enabled: boolean | null;
  subgroup_creation_level: string;
  emails_disabled: boolean | number;
  mentions_disabled: boolean | number;
  lfs_enabled: boolean;
  default_branch_protection: number;
  avatar_url: string | null;
  request_access_enabled: boolean;
  full_name: string;
  full_path: string;
  created_at: string;
  parent_id: number | null;
  ldap_cn: string | null;
  ldap_access: string | null;
  shared_with_groups: GroupShare[];
  runners_token: string;
  projects: Project[];
  shared_projects: Project[];
  shared_runners_minutes_limit: number | null;
  extra_shared_runners_minutes_limit: number | null;
}

export interface GroupShare {
  group_id: number;
  group_name: string;
  group_full_path: string;
  group_access_level: number;
  expires_at: string;
}

export interface Project {
  id: number;
  description: string | null;
  default_branch: string;
  visibility: "public" | "internal" | "private";
  ssh_url_to_repo: string;
  http_url_to_repo: string;
  web_url: string;
  readme_url: string;
  tag_list: string[];
  owner: {
    id: number;
    name: string;
    created_at: Date;
  };
  name: string;
  name_with_namespace: string;
  path: string;
  path_with_namespace: string;
  issues_enabled: boolean;
  open_issues_count: number;
  merge_requests_enabled: boolean;
  jobs_enabled: boolean;
  wiki_enabled: boolean;
  snippets_enabled: boolean;
  can_create_merge_request_in: boolean;
  resolve_outdated_diff_discussions: boolean;
  container_registry_enabled: boolean;
  created_at: Date;
  last_activity_at: Date;
  creator_id: number;
  namespace: {
    id: number;
    name: string;
    path: string;
    kind: "user" | "group";
    full_path: string;
  };
  import_status: string;
  archived: boolean;
  avatar_url: string;
  shared_runners_enabled: boolean;
  forks_count: number;
  star_count: number;
  runners_token: string;
  ci_default_git_depth: number;
  public_jobs: boolean;
  shared_with_groups: GroupShare[];
  only_allow_merge_if_pipeline_succeeds: boolean;
  allow_merge_on_skipped_pipeline: boolean;
  only_allow_merge_if_all_discussions_are_resolved: boolean;
  remove_source_branch_after_merge: boolean;
  request_access_enabled: boolean;
  merge_method: string;
  autoclose_referenced_issues: boolean;
  suggestion_commit_message: string | null;
  marked_for_deletion_on: string;
  statistics: {
    commit_count: number;
    storage_size: number;
    repository_size: number;
    wiki_size: number;
    lfs_objects_size: number;
    job_artifacts_size: number;
    packages_size: number;
    snippets_size: number;
  };
  _links: {
    self: string;
    issues: string;
    merge_requests: string;
    repo_branches: string;
    labels: string;
    events: string;
    members: string;
  };
}

export interface Member {
  id: number;
  username: string;
  name: string;
  state: string;
  avatar_url: string;
  web_url: string;
  expires_at: string;
  access_level: number;
  email: string;
}

export default class API {
  private accessToken?: string;

  constructor(public path: string) {
    this.setToken();
  }

  async query(options: {
    entryPoint: string;
    method:
      | "GET"
      | "HEAD"
      | "POST"
      | "PUT"
      | "DELETE"
      | "CONNECT"
      | "OPTIONS"
      | "TRACE"
      | "PATCH";
    output?: "json" | "xml" | "text" | "blob";
    get?: Record<string, string>;
    post?: Record<string, string>;
    headers?: Record<string, string>;
    params?: Record<string, string>;
  }) {
    const { entryPoint, method } = options;
    const output = options.output !== undefined ? options.output : "json";
    const get = options.get !== undefined ? options.get : {};
    const post = options.post !== undefined ? options.post : {};
    const headers = options.headers !== undefined ? options.headers : {};
    let entryPointParametrized = entryPoint;
    for (const [param, value] of Object.entries(options.params || {})) {
      entryPointParametrized = entryPointParametrized.replace(
        new RegExp(`:${param}`, "g"),
        encodeURI(value)
      );
    }
    const url = new URL(entryPointParametrized, this.path);
    for (const [p, v] of Object.entries({
      ...get,
      ...(this.accessToken !== undefined
        ? { access_token: this.accessToken }
        : {}),
    })) {
      url.searchParams.set(p, v);
    }
    const result = await fetch(url.toString(), {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: Object.entries(post).length > 0 ? JSON.stringify(post) : undefined,
    });
    switch (output) {
      case "json":
        return await result.json();
      case "xml":
        return new DOMParser().parseFromString(await result.text(), "text/xml");
      case "text":
        return await result.text();
      case "blob":
        return await result.blob();
    }
  }

  saveToken(token: string) {
    this.accessToken = token;
    localStorage.setItem(`${this.path}-token`, token);
  }

  setToken() {
    const token = this.getToken();
    if (token !== undefined) {
      this.accessToken = token;
    }
  }

  getToken() {
    return localStorage.getItem(`${this.path}-token`) || undefined;
  }

  removeToken() {
    this.accessToken = undefined;
    localStorage.removeItem(`${this.path}-token`);
  }

  async login(
    username: string,
    password: string
  ): Promise<
    { status: "success"; token: string } | { status: "failure"; error: any }
  > {
    if (this.accessToken) return { status: "success", token: this.accessToken };
    try {
      const response = await this.query({
        entryPoint: "/oauth/token",
        method: "POST",
        post: {
          grant_type: "password",
          username: username,
          password: password,
          scope: "read_repository write_repository api",
        },
      });
      if (response.access_token !== undefined) {
        this.saveToken(response.access_token);
        return {
          status: "success",
          token: response.access_token,
        };
      }
      return { status: "failure", error: response };
    } catch (e) {
      return { status: "failure", error: e };
    }
  }

  logout() {
    this.removeToken();
  }

  async projects(): Promise<Project[]> {
    const response = await this.query({
      entryPoint: "projects",
      method: "GET",
    });
    return response;
  }

  async project(user: string, project: string): Promise<Project> {
    const response = await this.query({
      entryPoint: `projects/:user%2F:project?statistics=true&license=true`,
      method: "GET",
      params: {
        user,
        project,
      },
    });
    return response;
  }

  async projectMembers(user: string, project: string): Promise<Member[]> {
    const response = await this.query({
      entryPoint: `projects/:user%2F:project/members`,
      method: "GET",
      params: {
        user,
        project,
      },
    });
    return response;
  }

  async group(name: string): Promise<Group> {
    const response = await this.query({
      entryPoint: `groups/:name`,
      method: "GET",
      params: {
        name,
      },
    });
    return response;
  }
}
