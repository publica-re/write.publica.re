import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PropertyData from "../defs/Property";

export { default as PropertyData } from "../defs/Property";

export interface PropertyProps {}

export interface PropertyState {}

export class Property extends Transformer.Template<
  PropertyProps,
  PropertyState
> {
  constructor(
    props: PropertyProps & {
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
        mixed={PropertyData.mixed}
        elements={PropertyData.elements}
        attributes={PropertyData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Property, {
  path: `*[namespace-uri()='${PropertyData.namespace}' and local-name()='${PropertyData.localName}']`,
});
