import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SpanspecData from "../defs/Spanspec";

export { default as SpanspecData } from "../defs/Spanspec";

export interface SpanspecProps {}

export interface SpanspecState {}

export class Spanspec extends Transformer.Template<
  SpanspecProps,
  SpanspecState
> {
  constructor(
    props: SpanspecProps & {
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
        mixed={SpanspecData.mixed}
        elements={SpanspecData.elements}
        attributes={SpanspecData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Spanspec, {
  path: `*[namespace-uri()='${SpanspecData.namespace}' and local-name()='${SpanspecData.localName}']`,
});
