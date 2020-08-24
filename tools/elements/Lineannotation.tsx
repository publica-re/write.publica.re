import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import LineannotationData from "../defs/Lineannotation";

export { default as LineannotationData } from "../defs/Lineannotation";

export interface LineannotationProps {}

export interface LineannotationState {}

export class Lineannotation extends Transformer.Template<
  LineannotationProps,
  LineannotationState
> {
  constructor(
    props: LineannotationProps & {
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
        mixed={LineannotationData.mixed}
        elements={LineannotationData.elements}
        attributes={LineannotationData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Lineannotation, {
  path: `*[namespace-uri()='${LineannotationData.namespace}' and local-name()='${LineannotationData.localName}']`,
});
