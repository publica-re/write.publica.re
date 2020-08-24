import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ConfsponsorData from "../defs/Confsponsor";

export { default as ConfsponsorData } from "../defs/Confsponsor";

export interface ConfsponsorProps {}

export interface ConfsponsorState {}

export class Confsponsor extends Transformer.Template<
  ConfsponsorProps,
  ConfsponsorState
> {
  constructor(
    props: ConfsponsorProps & {
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
        mixed={ConfsponsorData.mixed}
        elements={ConfsponsorData.elements}
        attributes={ConfsponsorData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Confsponsor, {
  path: `*[namespace-uri()='${ConfsponsorData.namespace}' and local-name()='${ConfsponsorData.localName}']`,
});
