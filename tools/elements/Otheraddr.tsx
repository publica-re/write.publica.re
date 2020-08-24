import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import OtheraddrData from "../defs/Otheraddr";

export { default as OtheraddrData } from "../defs/Otheraddr";

export interface OtheraddrProps {}

export interface OtheraddrState {}

export class Otheraddr extends Transformer.Template<
  OtheraddrProps,
  OtheraddrState
> {
  constructor(
    props: OtheraddrProps & {
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
        mixed={OtheraddrData.mixed}
        elements={OtheraddrData.elements}
        attributes={OtheraddrData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Otheraddr, {
  path: `*[namespace-uri()='${OtheraddrData.namespace}' and local-name()='${OtheraddrData.localName}']`,
});
