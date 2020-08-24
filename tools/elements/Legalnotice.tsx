import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import LegalnoticeData from "../defs/Legalnotice";

export { default as LegalnoticeData } from "../defs/Legalnotice";

export interface LegalnoticeProps {}

export interface LegalnoticeState {}

export class Legalnotice extends Transformer.Template<
  LegalnoticeProps,
  LegalnoticeState
> {
  constructor(
    props: LegalnoticeProps & {
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
        mixed={LegalnoticeData.mixed}
        elements={LegalnoticeData.elements}
        attributes={LegalnoticeData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Legalnotice, {
  path: `*[namespace-uri()='${LegalnoticeData.namespace}' and local-name()='${LegalnoticeData.localName}']`,
});
