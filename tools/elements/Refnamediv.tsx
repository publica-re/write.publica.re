import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RefnamedivData from "../defs/Refnamediv";

export { default as RefnamedivData } from "../defs/Refnamediv";

export interface RefnamedivProps {}

export interface RefnamedivState {}

export class Refnamediv extends Transformer.Template<
  RefnamedivProps,
  RefnamedivState
> {
  constructor(
    props: RefnamedivProps & {
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
        mixed={RefnamedivData.mixed}
        elements={RefnamedivData.elements}
        attributes={RefnamedivData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Refnamediv, {
  path: `*[namespace-uri()='${RefnamedivData.namespace}' and local-name()='${RefnamedivData.localName}']`,
});
