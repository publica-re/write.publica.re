import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TermdefData from "../defs/Termdef";

export { default as TermdefData } from "../defs/Termdef";

export interface TermdefProps {}

export interface TermdefState {}

export class Termdef extends Transformer.Template<TermdefProps, TermdefState> {
  constructor(
    props: TermdefProps & {
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
        mixed={TermdefData.mixed}
        elements={TermdefData.elements}
        attributes={TermdefData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Termdef, {
  path: `*[namespace-uri()='${TermdefData.namespace}' and local-name()='${TermdefData.localName}']`,
});
