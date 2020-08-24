import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ContractsponsorData from "../defs/Contractsponsor";

export { default as ContractsponsorData } from "../defs/Contractsponsor";

export interface ContractsponsorProps {}

export interface ContractsponsorState {}

export class Contractsponsor extends Transformer.Template<
  ContractsponsorProps,
  ContractsponsorState
> {
  constructor(
    props: ContractsponsorProps & {
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
        mixed={ContractsponsorData.mixed}
        elements={ContractsponsorData.elements}
        attributes={ContractsponsorData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Contractsponsor, {
  path: `*[namespace-uri()='${ContractsponsorData.namespace}' and local-name()='${ContractsponsorData.localName}']`,
});
