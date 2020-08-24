import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GlossseealsoData from "../defs/Glossseealso";

export { default as GlossseealsoData } from "../defs/Glossseealso";

export interface GlossseealsoProps {}

export interface GlossseealsoState {}

export class Glossseealso extends Transformer.Template<
  GlossseealsoProps,
  GlossseealsoState
> {
  constructor(
    props: GlossseealsoProps & {
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
        mixed={GlossseealsoData.mixed}
        elements={GlossseealsoData.elements}
        attributes={GlossseealsoData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Glossseealso, {
  path: `*[namespace-uri()='${GlossseealsoData.namespace}' and local-name()='${GlossseealsoData.localName}']`,
});
