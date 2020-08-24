import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ProductionData from "../defs/Production";

export { default as ProductionData } from "../defs/Production";

export interface ProductionProps {}

export interface ProductionState {}

export class Production extends Transformer.Template<
  ProductionProps,
  ProductionState
> {
  constructor(
    props: ProductionProps & {
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
        mixed={ProductionData.mixed}
        elements={ProductionData.elements}
        attributes={ProductionData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Production, {
  path: `*[namespace-uri()='${ProductionData.namespace}' and local-name()='${ProductionData.localName}']`,
});
