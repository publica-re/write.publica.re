import * as React from "react";
import * as UI from "@fluentui/react";
import {
  RouteComponentProps,
  withRouter,
  Route,
  Switch,
} from "react-router-dom";

import API, { Project as ProjectType } from "../API";

import Navigation from "./Navigation";
import Settings, { SettingsProps } from "./Settings";
import Edit, { EditProps } from "./Edit";

export interface ProjectRouterProps {
  user: string;
  project: string;
}

export interface ProjectProps extends RouteComponentProps<ProjectRouterProps> {
  api: API;
  project?: ProjectType;
  children?: React.ReactNode;
}

export interface ProjectState {
  isExpanded: boolean;
}

class Project extends React.Component<ProjectProps, ProjectState> {
  constructor(props: ProjectProps) {
    super(props);

    this.state = {
      isExpanded: true,
    };
  }

  render() {
    const { project: projectData, api } = this.props;
    const { user, project } = this.props.match.params;
    const { url } = this.props.match;
    const { location, history, match } = this.props;
    if (projectData === undefined) return null;
    return (
      <UI.Stack
        horizontal
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Navigation
          user={user}
          project={project}
          api={api}
          {...{ location, history, match }}
        />
        {projectData !== undefined && (
          <Switch>
            <Route
              path={`${url}/edit`}
              component={(props: EditProps) => (
                <Edit {...this.props} {...props} projectData={projectData} />
              )}
            />
            <Route
              path={`${url}/settings`}
              component={(props: SettingsProps) => (
                <Settings
                  {...this.props}
                  {...props}
                  projectData={projectData}
                />
              )}
            />
          </Switch>
        )}
      </UI.Stack>
    );
  }
}

export default withRouter(Project);
