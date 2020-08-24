import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GlosslistData from "../defs/Glosslist";

export { default as GlosslistData } from "../defs/Glosslist";

export interface GlosslistProps {}

export interface GlosslistState {}

export class Glosslist extends Transformer.Template<
  GlosslistProps,
  GlosslistState
> {
  constructor(
    props: GlosslistProps & {
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
        mixed={GlosslistData.mixed}
        elements={GlosslistData.elements}
        attributes={GlosslistData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Glosslist, {
  path: `*[namespace-uri()='${GlosslistData.namespace}' and local-name()='${GlosslistData.localName}']`,
});
