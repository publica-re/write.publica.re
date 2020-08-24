import React from "react";
import * as UI from "@fluentui/react";
import bind from "bind-decorator";
import Transformer from "@publica.re/react-xml-transformer";
import { Git, GitComponentState } from "@publica.re/react-git-taskbar";
import docbookContext from "./context";
import "./DocBook.sass";
import { debounce } from "lodash";
import Sidebar from "./Sidebar";

export interface EditorProps {
  path: string;
}

export interface EditorState {
  doc?: XMLDocument;
  lastChanged: number;
  text?: {
    text: string;
    node: Node;
    start: number;
    end: number;
  };
  possible?: {
    node: Node;
    elements: object[];
    attributes: object[];
  }[];
}

export default class Editor extends Git.Component<EditorProps, EditorState> {
  constructor(props: EditorProps) {
    super(props);

    this.state = {
      ...this.state,
      gitWatch: {
        file: {
          read: {
            path: props.path,
            mode: "text",
          },
        },
      },
      possible: [],
      lastChanged: new Date().getTime(),
    };
  }

  @bind
  async writeFile() {
    const { doc } = this.state;
    const { file } = this.context.io;
    if (doc !== undefined) {
      const serialized = new XMLSerializer().serializeToString(doc);
      await file.write({
        path: this.props.path,
        content: serialized,
        mode: "text",
      });
    }
  }

  @bind
  async componentDidMount() {
    await super.componentDidMount();
    docbookContext.emitter.on("r4:edit", debounce(this.writeFile, 5000));
    docbookContext.emitter.on("r4:render", ([data]) => {
      this.setState(({ lastChanged, possible }) => {
        if (new Date().getTime() - lastChanged < 300) {
          return {
            possible: [...possible, data],
            lastChanged: new Date().getTime(),
          };
        }
        return {
          possible: [data],
          lastChanged: new Date().getTime(),
        };
      });
    });
    docbookContext.emitter.on("r4:focus", ([data]) => {
      this.setState({
        text: data,
      });
    });
  }

  @bind
  async componentWillUnmount() {
    await super.componentWillUnmount();
  }

  @bind
  async componentDidUpdate(
    prevProps: EditorProps,
    prevState: EditorState & GitComponentState
  ) {
    super.componentDidUpdate(prevProps, prevState);
    process.nextTick(() => {
      if (prevState.gitValues.file?.read !== this.state.gitValues.file?.read) {
        const fileData = this.state.gitValues.file?.read as string;
        if (fileData !== undefined) {
          const doc = new DOMParser().parseFromString(fileData, "text/xml");
          this.setState({
            doc: doc,
          });
        }
      }
    });
  }

  render() {
    if (this.state.doc === undefined)
      return (
        <div
          style={{
            width: "60vw",
            margin: "auto",
            paddingTop: "5vh",
          }}
        >
          <div style={{ width: "45vw", lineHeight: "14px" }}>
            <UI.Shimmer
              width="30%"
              shimmerElements={[
                { type: UI.ShimmerElementType.line, height: 36 },
              ]}
            />
            <br />
            <UI.Shimmer width="95%" />
            <br />
            <UI.Shimmer width="75%" />
            <br />
            <UI.Shimmer />
            <br />
            <UI.Shimmer width="80%" />
            <br />
            <UI.Shimmer width="75%" />
            <br />
            <UI.Shimmer width="35%" />
          </div>
        </div>
      );
    return (
      <div className="DocBook">
        <Transformer.Stylesheet
          contextData={docbookContext}
          contextDocument={this.state.doc}
        />
        <Sidebar
          possible={this.state.possible || []}
          text={this.state.text}
          emit={() =>
            this.state.text &&
            docbookContext.emitter.emit(
              Transformer.computeXPathFromElement(this.state.text.node)
            )
          }
        />
      </div>
    );
  }
}
