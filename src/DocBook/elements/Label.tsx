import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import LabelData from "../defs/Label";

export { default as LabelData } from "../defs/Label";

export interface LabelProps {}

export interface LabelState {}

export class Label extends Transformer.Template<LabelProps, LabelState> {
  constructor(
    props: LabelProps & {
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
        mixed={LabelData.mixed}
        elements={LabelData.elements}
        attributes={LabelData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Label, {
  path: `*[namespace-uri()='${LabelData.namespace}' and local-name()='${LabelData.localName}']`,
});
