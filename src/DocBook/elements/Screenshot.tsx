import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ScreenshotData from "../defs/Screenshot";

export { default as ScreenshotData } from "../defs/Screenshot";

export interface ScreenshotProps {}

export interface ScreenshotState {}

export class Screenshot extends Transformer.Template<
  ScreenshotProps,
  ScreenshotState
> {
  constructor(
    props: ScreenshotProps & {
      contextData: typeof ctx;
      contextNode: Node;
    }
  ) {
    super(props);
    this.state = {
      ...this.state,
    };
  }

  render() {
    return (
      <Insert
        mixed={ScreenshotData.mixed}
        elements={ScreenshotData.elements}
        attributes={ScreenshotData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Screenshot, {
  path: `*[namespace-uri()='${ScreenshotData.namespace}' and local-name()='${ScreenshotData.localName}']`,
});
