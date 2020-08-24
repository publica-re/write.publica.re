import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import NonterminalData from "../defs/Nonterminal";

export { default as NonterminalData } from "../defs/Nonterminal";

export interface NonterminalProps {}

export interface NonterminalState {}

export class Nonterminal extends Transformer.Template<
  NonterminalProps,
  NonterminalState
> {
  constructor(
    props: NonterminalProps & {
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
        mixed={NonterminalData.mixed}
        elements={NonterminalData.elements}
        attributes={NonterminalData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Nonterminal, {
  path: `*[namespace-uri()='${NonterminalData.namespace}' and local-name()='${NonterminalData.localName}']`,
});
