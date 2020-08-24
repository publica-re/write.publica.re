import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TermData from "../defs/Term";

export { default as TermData } from "../defs/Term";

export interface TermProps {}

export interface TermState {}

export class Term extends Transformer.Template<TermProps, TermState> {
  constructor(
    props: TermProps & {
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
        mixed={TermData.mixed}
        elements={TermData.elements}
        attributes={TermData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Term, {
  path: `*[namespace-uri()='${TermData.namespace}' and local-name()='${TermData.localName}']`,
});
