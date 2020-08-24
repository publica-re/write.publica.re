import * as React from "react";
import DocBook from "../DocBook";
import { Git, View } from "@publica.re/react-git-taskbar";
import ImageViewer from "./ImageViewer";
import PDFViewer from "./PDFViewer";
import R4Editor from "./R4Editor";
import HTMLViewer from "./HTMLViewer";
import { RouteComponentProps, withRouter } from "react-router";

export interface EditorRouterProps {
  path: string;
}

export interface EditorProps extends RouteComponentProps<EditorRouterProps> {}

export interface EditorProps {
  onEdit: (path: string) => void;
  children?: React.ReactNode;
}

export interface EditorState {
  guessedPath?: string;
}

class Editor extends Git.Component<EditorProps, EditorState> {
  async componentDidMount() {
    super.componentDidMount();

    if (this.props.match.params.path === undefined) {
      const { file } = this.context.io;
      const r4 = await file.read({ path: "/r4.config.xml", mode: "text" });
      if (r4.type === "success") {
        const doc = new DOMParser().parseFromString(
          r4.value as string,
          "text/xml"
        );
        const tags = doc.getElementsByTagNameNS(
          "https://publica.re/def/r4",
          "entrypoint"
        );

        if (tags.length > 0) {
          const src = tags[0].getAttribute("src");
          if (src !== null) {
            this.props.onEdit(src);
          }
        }
      }
    }
  }

  render() {
    const { path } = this.props.match.params;
    if (path === undefined) return null;

    const actions = {
      "\\.xml$": <DocBook path={path} />,
      "\\.html$": <HTMLViewer path={path} />,
      "\\.txt$": <View.Editor filePath={path} />,
      "\\.(jpg|jpeg|png)$": <ImageViewer path={path} />,
      "\\.pdf$": <PDFViewer path={path} />,
      "r4\\.config\\.xml$": <R4Editor path={path} />,
    };
    const matching = Object.keys(actions).find((match) => path.match(match));
    if (matching !== undefined) return actions[matching];
    return null;
  }
}

export default withRouter(Editor);
