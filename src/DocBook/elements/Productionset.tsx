import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ProductionsetData from "../defs/Productionset";

export { default as ProductionsetData } from "../defs/Productionset";

export interface ProductionsetProps {}

export interface ProductionsetState {}

export class Productionset extends Transformer.Template<
  ProductionsetProps,
  ProductionsetState
> {
  constructor(
    props: ProductionsetProps & {
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
        mixed={ProductionsetData.mixed}
        elements={ProductionsetData.elements}
        attributes={ProductionsetData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Productionset, {
  path: `*[namespace-uri()='${ProductionsetData.namespace}' and local-name()='${ProductionsetData.localName}']`,
});
