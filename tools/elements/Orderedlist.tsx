import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import OrderedlistData from "../defs/Orderedlist";

export { default as OrderedlistData } from "../defs/Orderedlist";

export interface OrderedlistProps {}

export interface OrderedlistState {}

export class Orderedlist extends Transformer.Template<
  OrderedlistProps,
  OrderedlistState
> {
  constructor(
    props: OrderedlistProps & {
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
        mixed={OrderedlistData.mixed}
        elements={OrderedlistData.elements}
        attributes={OrderedlistData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Orderedlist, {
  path: `*[namespace-uri()='${OrderedlistData.namespace}' and local-name()='${OrderedlistData.localName}']`,
});
