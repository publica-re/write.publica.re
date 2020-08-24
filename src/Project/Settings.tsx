import * as React from "react";
import * as UI from "@fluentui/react";
import API, { Project, Member, Group } from "../API";
import R4Editor from "../Editor/R4Editor";
import { withRouter, RouteComponentProps } from "react-router";
import { Utils } from "@publica.re/react-git-taskbar";

export interface SettingsProps extends RouteComponentProps {
  api: API;
  projectData: Project;
}

export interface SettingsState {
  project?: Project;
  members: Member[];
  groups: Group[];
}

const settingsStyle: Partial<React.CSSProperties> = {
  width: "80vw",
  margin: "auto",
};
const inputStyle: Partial<UI.ITextStyles> = {
  root: {
    width: "100%",
  },
};

class Settings extends React.Component<SettingsProps, SettingsState> {
  constructor(props: SettingsProps) {
    super(props);

    this.state = {
      project: undefined,
      members: [],
      groups: [],
    };
  }

  accessLevelToString(al: number): string {
    if (al < 10) return "No access";
    if (al < 20) return "Guest";
    if (al < 30) return "Reporter";
    if (al < 40) return "Developer";
    if (al < 50) return "Maintainer";
    if (al < 60) return "Owner";
    return "Unknown";
  }

  async componentDidMount() {
    const project = await this.props.api.project(
      this.props.projectData.namespace.full_path,
      this.props.projectData.path
    );
    const members = await this.props.api.projectMembers(
      this.props.projectData.namespace.full_path,
      this.props.projectData.path
    );
    const groups = await Promise.all(
      project.shared_with_groups.map(
        async ({ group_name }) => await this.props.api.group(group_name)
      )
    );
    this.setState({
      project,
      members,
      groups,
    });
  }

  render() {
    const { project, members } = this.state;
    if (project === undefined || members === undefined)
      return <Utils.Loader message="retrieving data" />;
    const fromGroup = (group: Group) =>
      this.state.project?.shared_with_groups.find(
        ({ group_name }) => group_name === group.name
      );

    return (
      <div style={settingsStyle}>
        <UI.Stack tokens={{ childrenGap: 5 }}>
          <UI.Stack horizontal tokens={{ childrenGap: 15 }}>
            <UI.TextField
              label="Name"
              value={project.name}
              styles={inputStyle}
            />
            <UI.TextField label="Id" value={project.id.toString()} disabled />
          </UI.Stack>
          <UI.TextField
            multiline
            label="Description"
            value={project.description || ""}
          />
          <UI.Separator />
          <UI.TextField
            disabled
            label="Git repository"
            value={project.http_url_to_repo}
          />
          <UI.Separator>Project</UI.Separator>
          <R4Editor path="r4.config.xml" />
          <UI.Stack
            horizontal
            styles={{ root: { width: "100% " } }}
            tokens={{ childrenGap: 15 }}
          >
            <UI.Stack styles={{ root: { width: "100% " } }}>
              <UI.Separator>Members</UI.Separator>
              {this.state.members.map((member) => {
                return (
                  <UI.Persona
                    text={member.name}
                    presence={
                      member.state === "active"
                        ? UI.PersonaPresence.online
                        : UI.PersonaPresence.blocked
                    }
                    imageUrl={member.avatar_url}
                    secondaryText={this.accessLevelToString(
                      member.access_level
                    )}
                  />
                );
              })}
            </UI.Stack>
            <UI.Stack styles={{ root: { width: "100% " } }}>
              <UI.Separator>Groups</UI.Separator>
              {this.state.groups.map((group) => {
                return (
                  <UI.Persona
                    text={group.full_name}
                    presence={
                      !fromGroup(group)?.expires_at ||
                      new Date(fromGroup(group)?.expires_at || 0) < new Date()
                        ? UI.PersonaPresence.online
                        : UI.PersonaPresence.blocked
                    }
                    secondaryText={this.accessLevelToString(
                      fromGroup(group)?.group_access_level || 0
                    )}
                  />
                );
              })}
            </UI.Stack>
          </UI.Stack>
        </UI.Stack>
      </div>
    );
  }
}

export default withRouter(Settings);
