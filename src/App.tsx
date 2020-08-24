import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import bind from "bind-decorator";
import API from "./API";
import Login from "./Login";
import * as UI from "@fluentui/react";
import "./App.sass";
import ProjectWrapper from "./Project/ProjectWrapper";
import Projects from "./Projects";
import { ProjectProps } from "./Project/Project";

UI.initializeIcons();

export interface AppProps {}

export interface AppState {
  path?: string;
  apiToken?: string;
}

export default class App extends React.Component<AppProps, AppState> {
  private api = new API("https://git.publica.re/api/v4/");
  constructor(props: AppProps) {
    super(props);
    this.state = {
      path: undefined,
      apiToken: this.api.getToken(),
    };
  }

  @bind
  onEdit(path: string) {
    this.setState({ path: path });
  }

  @bind
  onLogin(token: string) {
    this.setState({ apiToken: token });
  }

  render() {
    return (
      <UI.Fabric>
        <Login
          isVisible={this.state.apiToken === undefined}
          api={this.api}
          onLogin={this.onLogin}
        />
        {this.state.apiToken !== undefined && (
          <Router>
            <Switch>
              <Route
                path="/:user/:project/"
                component={(props: ProjectProps) => (
                  <ProjectWrapper {...props} api={this.api} />
                )}
              ></Route>
              <Route path="/" exact={true}>
                <Projects api={this.api} />
              </Route>
            </Switch>
          </Router>
        )}
      </UI.Fabric>
    );
  }
}
