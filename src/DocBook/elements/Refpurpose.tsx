import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RefpurposeData from "../defs/Refpurpose";

export { default as RefpurposeData } from "../defs/Refpurpose";

export interface RefpurposeProps {}

export interface RefpurposeState {}

export class Refpurpose extends Transformer.Template<
  RefpurposeProps,
  RefpurposeState
> {
  constructor(
    props: RefpurposeProps & {
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
        mixed={RefpurposeData.mixed}
        elements={RefpurposeData.elements}
        attributes={RefpurposeData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Refpurpose, {
  path: `*[namespace-uri()='${RefpurposeData.namespace}' and local-name()='${RefpurposeData.localName}']`,
});
