import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GlossdivData from "../defs/Glossdiv";

export { default as GlossdivData } from "../defs/Glossdiv";

export interface GlossdivProps {}

export interface GlossdivState {}

export class Glossdiv extends Transformer.Template<
  GlossdivProps,
  GlossdivState
> {
  constructor(
    props: GlossdivProps & {
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
        mixed={GlossdivData.mixed}
        elements={GlossdivData.elements}
        attributes={GlossdivData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Glossdiv, {
  path: `*[namespace-uri()='${GlossdivData.namespace}' and local-name()='${GlossdivData.localName}']`,
});
