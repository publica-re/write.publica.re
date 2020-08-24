import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GlossdefData from "../defs/Glossdef";

export { default as GlossdefData } from "../defs/Glossdef";

export interface GlossdefProps {}

export interface GlossdefState {}

export class Glossdef extends Transformer.Template<
  GlossdefProps,
  GlossdefState
> {
  constructor(
    props: GlossdefProps & {
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
        mixed={GlossdefData.mixed}
        elements={GlossdefData.elements}
        attributes={GlossdefData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Glossdef, {
  path: `*[namespace-uri()='${GlossdefData.namespace}' and local-name()='${GlossdefData.localName}']`,
});
