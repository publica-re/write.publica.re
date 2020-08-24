import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import InlineequationData from "../defs/Inlineequation";

export { default as InlineequationData } from "../defs/Inlineequation";

export interface InlineequationProps {}

export interface InlineequationState {}

export class Inlineequation extends Transformer.Template<
  InlineequationProps,
  InlineequationState
> {
  constructor(
    props: InlineequationProps & {
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
        mixed={InlineequationData.mixed}
        elements={InlineequationData.elements}
        attributes={InlineequationData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Inlineequation, {
  path: `*[namespace-uri()='${InlineequationData.namespace}' and local-name()='${InlineequationData.localName}']`,
});
