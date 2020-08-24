import * as React from "react";
import pathUtils from "path";
import bind from "bind-decorator";
import * as UI from "@fluentui/react";
import { ActionMenu } from "@publica.re/react-git-taskbar";
import API, { Project } from "../API";
import Editor from "../Editor";
import { withRouter, RouteComponentProps, Route, Switch } from "react-router";
import { EditorProps } from "../Editor/Editor";

export interface EditRouterProps {
  path: string;
}

export interface EditProps extends RouteComponentProps<EditRouterProps> {
  api: API;
  projectData: Project;
}

export interface EditState {
  defaultPath: string;
}

const theme = UI.getTheme();
const contentClass = UI.mergeStyles([
  {
    display: "grid",
    width: "100%",
    height: "100%",
    gridTemplateAreas: `'content'
'menu'`,
    gridTemplateRows: "1fr 4em",
    gridTemplateColumns: "1fr",
    backgroundColor: theme.palette.neutralLighterAlt,
  },
]);

class Edit extends React.Component<EditProps, EditState> {
  @bind
  onEdit(path: string) {
    this.props.history.push(pathUtils.join(this.props.match.path, path));
  }

  render() {
    return (
      <div className={contentClass}>
        <div
          style={{
            gridArea: "content",
            height: "calc(100vh - 4em)",
            overflow: "auto",
          }}
        >
          <Switch>
            <Route
              path={`${this.props.match.url}/:path+`}
              component={(props: EditorProps) => (
                <Editor {<Transformer.ApplyTemplates {...this.ctx} />props} onEdit={this.onEdit} />
              )}
            />
            <Route
              path={`${this.props.match.url}/`}
              component={(props: EditorProps) => (
                <Editor {<Transformer.ApplyTemplates {...this.ctx} />props} onEdit={this.onEdit} />
              )}
            />
          </Switch>
        </div>
        <div style={{ gridArea: "menu" }}>
          <ActionMenu onEdit={this.onEdit} />
        </div>
      </div>
    );
  }
}

export default withRouter(Edit);
