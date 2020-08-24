import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GlossaryData from "../defs/Glossary";

export { default as GlossaryData } from "../defs/Glossary";

export interface GlossaryProps {}

export interface GlossaryState {}

export class Glossary extends Transformer.Template<
  GlossaryProps,
  GlossaryState
> {
  constructor(
    props: GlossaryProps & {
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
        mixed={GlossaryData.mixed}
        elements={GlossaryData.elements}
        attributes={GlossaryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Glossary, {
  path: `*[namespace-uri()='${GlossaryData.namespace}' and local-name()='${GlossaryData.localName}']`,
});
