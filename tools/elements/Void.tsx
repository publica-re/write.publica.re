import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import VoidData from "../defs/Void";

export { default as VoidData } from "../defs/Void";

export interface VoidProps {}

export interface VoidState {}

export class Void extends Transformer.Template<VoidProps, VoidState> {
  constructor(
    props: VoidProps & {
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
        mixed={VoidData.mixed}
        elements={VoidData.elements}
        attributes={VoidData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Void, {
  path: `*[namespace-uri()='${VoidData.namespace}' and local-name()='${VoidData.localName}']`,
});
