import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ProductionrecapData from "../defs/Productionrecap";

export { default as ProductionrecapData } from "../defs/Productionrecap";

export interface ProductionrecapProps {}

export interface ProductionrecapState {}

export class Productionrecap extends Transformer.Template<
  ProductionrecapProps,
  ProductionrecapState
> {
  constructor(
    props: ProductionrecapProps & {
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
        mixed={ProductionrecapData.mixed}
        elements={ProductionrecapData.elements}
        attributes={ProductionrecapData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Productionrecap, {
  path: `*[namespace-uri()='${ProductionrecapData.namespace}' and local-name()='${ProductionrecapData.localName}']`,
});
