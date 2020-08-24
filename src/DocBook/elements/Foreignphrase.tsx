import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ForeignphraseData from "../defs/Foreignphrase";

export { default as ForeignphraseData } from "../defs/Foreignphrase";

export interface ForeignphraseProps {}

export interface ForeignphraseState {}

export class Foreignphrase extends Transformer.Template<
  ForeignphraseProps,
  ForeignphraseState
> {
  constructor(
    props: ForeignphraseProps & {
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
        mixed={ForeignphraseData.mixed}
        elements={ForeignphraseData.elements}
        attributes={ForeignphraseData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Foreignphrase, {
  path: `*[namespace-uri()='${ForeignphraseData.namespace}' and local-name()='${ForeignphraseData.localName}']`,
});
