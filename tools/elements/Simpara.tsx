import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SimparaData from "../defs/Simpara";

export { default as SimparaData } from "../defs/Simpara";

export interface SimparaProps {}

export interface SimparaState {}

export class Simpara extends Transformer.Template<SimparaProps, SimparaState> {
  constructor(
    props: SimparaProps & {
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
        mixed={SimparaData.mixed}
        elements={SimparaData.elements}
        attributes={SimparaData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Simpara, {
  path: `*[namespace-uri()='${SimparaData.namespace}' and local-name()='${SimparaData.localName}']`,
});
