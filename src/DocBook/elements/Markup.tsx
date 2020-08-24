import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MarkupData from "../defs/Markup";

export { default as MarkupData } from "../defs/Markup";

export interface MarkupProps {}

export interface MarkupState {}

export class Markup extends Transformer.Template<MarkupProps, MarkupState> {
  constructor(
    props: MarkupProps & {
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
        mixed={MarkupData.mixed}
        elements={MarkupData.elements}
        attributes={MarkupData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Markup, {
  path: `*[namespace-uri()='${MarkupData.namespace}' and local-name()='${MarkupData.localName}']`,
});
