import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ProductnameData from "../defs/Productname";

export { default as ProductnameData } from "../defs/Productname";

export interface ProductnameProps {}

export interface ProductnameState {}

export class Productname extends Transformer.Template<
  ProductnameProps,
  ProductnameState
> {
  constructor(
    props: ProductnameProps & {
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
        mixed={ProductnameData.mixed}
        elements={ProductnameData.elements}
        attributes={ProductnameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Productname, {
  path: `*[namespace-uri()='${ProductnameData.namespace}' and local-name()='${ProductnameData.localName}']`,
});
