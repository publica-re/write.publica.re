import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import LiteralData from "../defs/Literal";

export { default as LiteralData } from "../defs/Literal";

export interface LiteralProps {}

export interface LiteralState {}

export class Literal extends Transformer.Template<LiteralProps, LiteralState> {
  constructor(
    props: LiteralProps & {
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
        mixed={LiteralData.mixed}
        elements={LiteralData.elements}
        attributes={LiteralData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Literal, {
  path: `*[namespace-uri()='${LiteralData.namespace}' and local-name()='${LiteralData.localName}']`,
});
