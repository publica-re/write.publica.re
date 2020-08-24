import React from "react";
import bind from "bind-decorator";
import { Git, GitComponentState, Dialog } from "@publica.re/react-git-taskbar";
import * as UI from "@fluentui/react";

export interface R4EditorProps {
  path: string;
}

export interface R4EditorState {
  doc?: XMLDocument;
  configValues: {
    entrypoint?: string;
  };
  isFilePickerOpen: boolean;
}

export default class R4Editor extends Git.Component<
  R4EditorProps,
  R4EditorState
> {
  constructor(props: R4EditorProps) {
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
      configValues: {},
      isFilePickerOpen: false,
    };
  }

  @bind
  readConfig() {
    const { doc } = this.state;
    if (doc !== undefined) {
      const entrypoint = doc.evaluate(
        `//*[local-name()='entrypoint']/@src`,
        doc.documentElement,
        null,
        XPathResult.STRING_TYPE
      ).stringValue as string | undefined;
      this.setState({
        configValues: {
          entrypoint,
        },
        gitWatch: {
          ...this.state.gitWatch,
          file: {
            ...this.state.gitWatch.file,
            exists:
              entrypoint !== undefined
                ? {
                    path: entrypoint,
                  }
                : undefined,
          },
        },
      });
    }
  }

  @bind
  async writeConfig() {
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
  async makeEmptyConfig() {
    const doc = new DOMParser().parseFromString(
      `<?xml version="1.0" encoding="utf-8"?>
<r4:config xmlns="https://publica.re/def/r4" xmlns:r4="https://publica.re/def/r4">
    <r4:entrypoint src="change-me.xml" />
</r4:config>`,
      "text/xml"
    );
    this.setState(
      {
        doc: doc,
      },
      this.writeConfig
    );
  }

  @bind
  async componentDidUpdate(
    prevProps: R4EditorProps,
    prevState: R4EditorState & GitComponentState
  ) {
    super.componentDidUpdate(prevProps, prevState);
    process.nextTick(() => {
      if (prevState.gitValues.file?.read !== this.state.gitValues.file?.read) {
        const fileData = this.state.gitValues.file?.read as string;
        if (fileData !== undefined) {
          const doc = new DOMParser().parseFromString(fileData, "text/xml");
          if (doc.firstChild?.nodeName === "r4:config") {
            this.setState(
              {
                doc: doc,
              },
              this.readConfig
            );
          } else {
            this.makeEmptyConfig();
          }
        }
      }
    });
  }

  @bind
  openFilePicker() {
    this.setState({ isFilePickerOpen: true });
  }

  @bind
  closeFilePicker() {
    this.setState({ isFilePickerOpen: false });
  }

  @bind
  async chooseEntrypointFile(path: string) {
    const { doc } = this.state;
    if (doc !== undefined) {
      const entrypointNode = doc.evaluate(
        `//*[local-name()='entrypoint']`,
        doc.documentElement,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE
      ).singleNodeValue as Element;
      entrypointNode.setAttribute("src", path);
      this.writeConfig();
    }
    this.setState({ isFilePickerOpen: false });
  }

  @bind
  async chooseVisibility(visibility: string) {
    const { doc } = this.state;
    if (doc !== undefined) {
      const visibilityNode = doc.evaluate(
        `//*[local-name()='visibility']`,
        doc.documentElement,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE
      ).singleNodeValue as Element;
      visibilityNode.setAttribute("status", visibility);
      this.writeConfig();
    }
  }

  render() {
    return (
      <form>
        <UI.Stack>
          <UI.TextField
            value={this.state.configValues.entrypoint}
            label="Entry point"
            onKeyDown={() => false}
            onClick={this.openFilePicker}
            errorMessage={
              this.state.gitValues.file?.exists === false
                ? "This file does not exist !"
                : undefined
            }
          />
        </UI.Stack>
        <Dialog.FilePicker
          isVisible={this.state.isFilePickerOpen}
          onChoose={this.chooseEntrypointFile}
          onAbort={this.closeFilePicker}
        />
      </form>
    );
  }
}
