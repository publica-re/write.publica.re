import React from "react";
import { Git, GitComponentState } from "@publica.re/react-git-taskbar";
import { Document, Page } from "react-pdf";

import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export interface PDFViewerProps {
  path: string;
}

export interface PDFViewerState {
  pageTotal: number;
  pageCurrent: number;
  url: string;
}

export default class PDFViewer extends Git.Component<
  PDFViewerProps,
  PDFViewerState
> {
  constructor(props: PDFViewerProps) {
    super(props);

    this.state = {
      ...this.state,
      pageTotal: 1,
      pageCurrent: 1,
      url: "",
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

  componentDidUpdate(
    prevProps: PDFViewerProps,
    prevState: PDFViewerState & GitComponentState
  ) {
    super.componentDidUpdate(prevProps, prevState);
    if (
      prevState.gitValues.file?.read !== this.state.gitValues.file?.read &&
      this.state.gitValues.file?.read !== undefined
    ) {
      this.setState({
        url: window.URL.createObjectURL(
          new Blob([this.state.gitValues.file.read])
        ),
      });
    }
  }

  render() {
    if (this.state.gitValues?.file?.read === undefined) return "empty document";
    const { url } = this.state;
    return (
      <React.Fragment>
        <button
          onClick={() =>
            this.setState(({ pageCurrent }) => ({
              pageCurrent: pageCurrent - 1 >= 1 ? pageCurrent - 1 : 1,
            }))
          }
        >
          prev
        </button>
        <button
          onClick={() =>
            this.setState(({ pageCurrent, pageTotal }) => ({
              pageCurrent:
                pageCurrent + 1 <= pageTotal ? pageCurrent + 1 : pageTotal,
            }))
          }
        >
          next
        </button>
        <Document
          file={url}
          onLoadSuccess={({ numPages }) =>
            this.setState({ pageTotal: numPages })
          }
        >
          <Page pageNumber={this.state.pageCurrent} />
        </Document>
      </React.Fragment>
    );
  }
}
