import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ItemizedlistData from "../defs/Itemizedlist";

export { default as ItemizedlistData } from "../defs/Itemizedlist";

export interface ItemizedlistProps {}

export interface ItemizedlistState {}

export class Itemizedlist extends Transformer.Template<
  ItemizedlistProps,
  ItemizedlistState
> {
  constructor(
    props: ItemizedlistProps & {
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
        mixed={ItemizedlistData.mixed}
        elements={ItemizedlistData.elements}
        attributes={ItemizedlistData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Itemizedlist, {
  path: `*[namespace-uri()='${ItemizedlistData.namespace}' and local-name()='${ItemizedlistData.localName}']`,
});
