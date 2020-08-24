import * as React from "react";
import * as UI from "@fluentui/react";
import {
  Card,
  ICardTokens,
  ICardSectionTokens,
  ICardSectionStyles,
} from "@uifabric/react-cards";

import API, { Project } from "../API";

export interface Props {
  api: API;
  children?: React.ReactNode;
}

export interface State {
  projects: Project[];
}

const theme = UI.getTheme();
const footerCardSectionTokens: ICardSectionTokens = {
  padding: "12px 0px 0px",
};
const footerCardSectionStyles: ICardSectionStyles = {
  root: {
    borderTop: "1px solid",
    borderTopColor: theme.palette.themePrimary,
  },
};
const cardTokens: ICardTokens = { childrenMargin: 12 };
const iconStyles: UI.IIconStyles = {
  root: {
    color: theme.palette.themePrimary,
    fontSize: 16,
    fontWeight: UI.FontWeights.regular,
  },
};

export default class Projects extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  async componentDidMount(): Promise<void> {
    this.setState({ projects: await this.props.api.projects() });
  }

  render() {
    return (
      <UI.Stack horizontal tokens={{ childrenGap: 15 }}>
        {this.state.projects.map((project) => (
          <Card key={project.path_with_namespace} tokens={cardTokens}>
            <Card.Item>
              <UI.Image
                src={project.avatar_url}
                width="100%"
                alt="Project avatar"
              />
            </Card.Item>
            <Card.Item>
              <UI.Link href={`/${project.path_with_namespace}/`}>
                {project.name}
              </UI.Link>
            </Card.Item>
            <Card.Item>
              <UI.Persona
                size={UI.PersonaSize.small}
                text={project.owner.name}
              />
            </Card.Item>
            <Card.Section
              horizontal
              styles={footerCardSectionStyles}
              tokens={footerCardSectionTokens}
            >
              <UI.Icon iconName="RedEye" styles={iconStyles} />
              <UI.Icon iconName="SingleBookmark" styles={iconStyles} />
              <UI.Stack.Item grow={1}>
                <span />
              </UI.Stack.Item>
              <UI.Icon iconName="MoreVertical" styles={iconStyles} />
            </Card.Section>
          </Card>
        ))}
      </UI.Stack>
    );
  }
}
