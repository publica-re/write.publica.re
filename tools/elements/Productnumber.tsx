import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ProductnumberData from "../defs/Productnumber";

export { default as ProductnumberData } from "../defs/Productnumber";

export interface ProductnumberProps {}

export interface ProductnumberState {}

export class Productnumber extends Transformer.Template<
  ProductnumberProps,
  ProductnumberState
> {
  constructor(
    props: ProductnumberProps & {
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
        mixed={ProductnumberData.mixed}
        elements={ProductnumberData.elements}
        attributes={ProductnumberData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Productnumber, {
  path: `*[namespace-uri()='${ProductnumberData.namespace}' and local-name()='${ProductnumberData.localName}']`,
});
