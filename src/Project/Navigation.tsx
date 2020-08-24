import * as React from "react";
import bind from "bind-decorator";
import * as UI from "@fluentui/react";
import API from "../API";
import { RouteComponentProps } from "react-router";
import pathUtils from "path";

export interface NavigationProps extends RouteComponentProps {
  api: API;
  user: string;
  project: string;
}

export interface NavigationState {}

const theme = UI.getTheme();
const navStyles: Partial<UI.INavStyles> = {
  root: {
    width: "10vw",
    height: "100vh",
    borderRight: `solid 2px ${theme.palette.accent}`,
  },
};

class Navigation extends React.Component<NavigationProps, NavigationState> {
  constructor(props: NavigationProps) {
    super(props);

    this.state = {};
  }

  @bind
  onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: UI.INavLink) {
    if (ev !== undefined) {
      ev.preventDefault();
    }
    if (item !== undefined) {
      this.props.history.push(item.url);
    }
  }

  render() {
    const makeUrl = (localPath: string) =>
      pathUtils.join("/", this.props.user, this.props.project, localPath);
    return (
      <UI.Nav
        styles={navStyles}
        onLinkClick={this.onLinkClick}
        groups={[
          {
            links: [
              {
                icon: "Preview",
                name: "Preview",
                url: makeUrl("/"),
              },
              {
                icon: "PageEdit",
                name: "Edit",
                url: makeUrl("/edit"),
              },
              {
                icon: "IssueSolid",
                name: "Issues",
                url: makeUrl("/issues"),
              },
              {
                icon: "BranchMerge",
                name: "Merge requests",
                url: makeUrl("/merge"),
              },
              {
                icon: "Tag",
                name: "Versions",
                url: makeUrl("/versions"),
              },
              {
                icon: "Settings",
                name: "Settings",
                url: makeUrl("/settings"),
              },
              {
                icon: "ChevronLeft",
                name: "Back",
                url: "/",
              },
            ],
          },
        ]}
      />
    );
  }
}

export default Navigation;
