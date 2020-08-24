import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BlockquoteData from "../defs/Blockquote";

export { default as BlockquoteData } from "../defs/Blockquote";

export interface BlockquoteProps {}

export interface BlockquoteState {}

export class Blockquote extends Transformer.Template<
  BlockquoteProps,
  BlockquoteState
> {
  constructor(
    props: BlockquoteProps & {
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
        mixed={BlockquoteData.mixed}
        elements={BlockquoteData.elements}
        attributes={BlockquoteData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Blockquote, {
  path: `*[namespace-uri()='${BlockquoteData.namespace}' and local-name()='${BlockquoteData.localName}']`,
});
