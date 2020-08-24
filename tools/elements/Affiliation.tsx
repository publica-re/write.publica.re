import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AffiliationData from "../defs/Affiliation";

export { default as AffiliationData } from "../defs/Affiliation";

export interface AffiliationProps {}

export interface AffiliationState {}

export class Affiliation extends Transformer.Template<
  AffiliationProps,
  AffiliationState
> {
  constructor(
    props: AffiliationProps & {
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
        mixed={AffiliationData.mixed}
        elements={AffiliationData.elements}
        attributes={AffiliationData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Affiliation, {
  path: `*[namespace-uri()='${AffiliationData.namespace}' and local-name()='${AffiliationData.localName}']`,
});
