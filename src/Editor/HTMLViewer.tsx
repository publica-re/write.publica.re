import React from "react";
import { Git } from "@publica.re/react-git-taskbar";
import FrameComponent from "react-frame-component";
import "./HTMLViewer.sass";

export interface HTMLViewerProps {
  path: string;
}

export interface HTMLViewerState {}

export default class HTMLViewer extends Git.Component<
  HTMLViewerProps,
  HTMLViewerState
> {
  constructor(props: HTMLViewerProps) {
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
    };
  }

  render() {
    return (
      <FrameComponent className="Frame">
        <div
          dangerouslySetInnerHTML={{
            __html: (this.state.gitValues?.file?.read || "") as string,
          }}
        />
      </FrameComponent>
    );
  }
}
