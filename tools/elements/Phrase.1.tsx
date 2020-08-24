import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PhraseData from "../defs/Phrase.1";

export { default as PhraseData } from "../defs/Phrase.1";

export interface PhraseProps {}

export interface PhraseState {}

export class Phrase extends Transformer.Template<PhraseProps, PhraseState> {
  constructor(
    props: PhraseProps & {
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
        mixed={PhraseData.mixed}
        elements={PhraseData.elements}
        attributes={PhraseData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Phrase, {
  path: `*[namespace-uri()='${PhraseData.namespace}' and local-name()='${PhraseData.localName}']`,
});
