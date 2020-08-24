import React from "react";
import { Git } from "@publica.re/react-git-taskbar";

export interface ImageViewerProps {
  path: string;
}

export interface ImageViewerState {}

export default class ImageViewer extends Git.Component<
  ImageViewerProps,
  ImageViewerState
> {
  constructor(props: ImageViewerProps) {
    super(props);

    this.state = {
      ...this.state,
      gitWatch: {
        file: {
          read: {
            path: props.path,
            mode: "binary",
          },
        },
      },
    };
  }

  render() {
    if (this.state.gitValues?.file?.read === undefined) return "empty document";
    console.log(window.URL);
    const url = window.URL.createObjectURL(
      new Blob([this.state.gitValues.file.read])
    );

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <img src={url} alt={this.props.path} style={{ objectFit: "contain" }} />
      </div>
    );
  }
}
