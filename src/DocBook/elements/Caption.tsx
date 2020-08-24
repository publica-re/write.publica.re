import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CaptionData from "../defs/Caption";

export { default as CaptionData } from "../defs/Caption";

export interface CaptionProps {}

export interface CaptionState {}

export class Caption extends Transformer.Template<CaptionProps, CaptionState> {
  constructor(
    props: CaptionProps & {
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
        mixed={CaptionData.mixed}
        elements={CaptionData.elements}
        attributes={CaptionData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Caption, {
  path: `*[namespace-uri()='${CaptionData.namespace}' and local-name()='${CaptionData.localName}']`,
});
