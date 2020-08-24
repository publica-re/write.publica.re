import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MathphraseData from "../defs/Mathphrase";

export { default as MathphraseData } from "../defs/Mathphrase";

export interface MathphraseProps {}

export interface MathphraseState {}

export class Mathphrase extends Transformer.Template<
  MathphraseProps,
  MathphraseState
> {
  constructor(
    props: MathphraseProps & {
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
        mixed={MathphraseData.mixed}
        elements={MathphraseData.elements}
        attributes={MathphraseData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Mathphrase, {
  path: `*[namespace-uri()='${MathphraseData.namespace}' and local-name()='${MathphraseData.localName}']`,
});
