import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import VarnameData from "../defs/Varname";

export { default as VarnameData } from "../defs/Varname";

export interface VarnameProps {}

export interface VarnameState {}

export class Varname extends Transformer.Template<VarnameProps, VarnameState> {
  constructor(
    props: VarnameProps & {
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
        mixed={VarnameData.mixed}
        elements={VarnameData.elements}
        attributes={VarnameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Varname, {
  path: `*[namespace-uri()='${VarnameData.namespace}' and local-name()='${VarnameData.localName}']`,
});
