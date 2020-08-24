import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FootnoterefData from "../defs/Footnoteref";

export { default as FootnoterefData } from "../defs/Footnoteref";

export interface FootnoterefProps {}

export interface FootnoterefState {}

export class Footnoteref extends Transformer.Template<
  FootnoterefProps,
  FootnoterefState
> {
  constructor(
    props: FootnoterefProps & {
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
        mixed={FootnoterefData.mixed}
        elements={FootnoterefData.elements}
        attributes={FootnoterefData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Footnoteref, {
  path: `*[namespace-uri()='${FootnoterefData.namespace}' and local-name()='${FootnoterefData.localName}']`,
});
