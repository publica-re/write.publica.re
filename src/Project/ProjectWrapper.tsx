import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import API, { Project as ProjectType } from "../API";
import Project from "./Project";
import { Git, Utils } from "@publica.re/react-git-taskbar";

export interface ProjectRouterProps {
  // Map state to props (add the properties after the spread)
  user: string;
  project: string;
}

export interface ProjectProps extends RouteComponentProps<ProjectRouterProps> {
  api: API;
  children?: React.ReactNode;
}

export interface ProjectState {
  project?: ProjectType;
  isExpanded: boolean;
}

class ProjectWrapper extends React.Component<ProjectProps, ProjectState> {
  constructor(props: ProjectProps) {
    super(props);

    this.state = {
      project: undefined,
      isExpanded: true,
    };
  }

  async componentDidMount(): Promise<void> {
    this.setState({
      project: await this.props.api.project(
        this.props.match.params.user,
        this.props.match.params.project
      ),
    });
  }

  render() {
    const { project } = this.state;
    const { api } = this.props;
    if (project === undefined) return null;
    return (
      <Git.Provider
        url={project?.http_url_to_repo}
        auth={{
          type: "set",
          value: { username: "oauth2", password: api.getToken() },
        }}
        loader={Utils.Loader}
      >
        <Project api={this.props.api} project={project} />
      </Git.Provider>
    );
  }
}

export default withRouter(ProjectWrapper);
