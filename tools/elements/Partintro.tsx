import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PartintroData from "../defs/Partintro";

export { default as PartintroData } from "../defs/Partintro";

export interface PartintroProps {}

export interface PartintroState {}

export class Partintro extends Transformer.Template<
  PartintroProps,
  PartintroState
> {
  constructor(
    props: PartintroProps & {
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
        mixed={PartintroData.mixed}
        elements={PartintroData.elements}
        attributes={PartintroData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Partintro, {
  path: `*[namespace-uri()='${PartintroData.namespace}' and local-name()='${PartintroData.localName}']`,
});
