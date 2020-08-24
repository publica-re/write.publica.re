import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FormalparaData from "../defs/Formalpara";

export { default as FormalparaData } from "../defs/Formalpara";

export interface FormalparaProps {}

export interface FormalparaState {}

export class Formalpara extends Transformer.Template<
  FormalparaProps,
  FormalparaState
> {
  constructor(
    props: FormalparaProps & {
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
        mixed={FormalparaData.mixed}
        elements={FormalparaData.elements}
        attributes={FormalparaData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Formalpara, {
  path: `*[namespace-uri()='${FormalparaData.namespace}' and local-name()='${FormalparaData.localName}']`,
});
