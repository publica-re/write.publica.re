import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import VarargsData from "../defs/Varargs";

export { default as VarargsData } from "../defs/Varargs";

export interface VarargsProps {}

export interface VarargsState {}

export class Varargs extends Transformer.Template<VarargsProps, VarargsState> {
  constructor(
    props: VarargsProps & {
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
        mixed={VarargsData.mixed}
        elements={VarargsData.elements}
        attributes={VarargsData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Varargs, {
  path: `*[namespace-uri()='${VarargsData.namespace}' and local-name()='${VarargsData.localName}']`,
});
