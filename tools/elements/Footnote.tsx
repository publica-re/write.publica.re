import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FootnoteData from "../defs/Footnote";

export { default as FootnoteData } from "../defs/Footnote";

export interface FootnoteProps {}

export interface FootnoteState {}

export class Footnote extends Transformer.Template<
  FootnoteProps,
  FootnoteState
> {
  constructor(
    props: FootnoteProps & {
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
        mixed={FootnoteData.mixed}
        elements={FootnoteData.elements}
        attributes={FootnoteData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Footnote, {
  path: `*[namespace-uri()='${FootnoteData.namespace}' and local-name()='${FootnoteData.localName}']`,
});
