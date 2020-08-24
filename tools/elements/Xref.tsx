import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import XrefData from "../defs/Xref";

export { default as XrefData } from "../defs/Xref";

export interface XrefProps {}

export interface XrefState {}

export class Xref extends Transformer.Template<XrefProps, XrefState> {
  constructor(
    props: XrefProps & {
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
        mixed={XrefData.mixed}
        elements={XrefData.elements}
        attributes={XrefData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Xref, {
  path: `*[namespace-uri()='${XrefData.namespace}' and local-name()='${XrefData.localName}']`,
});
