import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CitationData from "../defs/Citation";

export { default as CitationData } from "../defs/Citation";

export interface CitationProps {}

export interface CitationState {}

export class Citation extends Transformer.Template<
  CitationProps,
  CitationState
> {
  constructor(
    props: CitationProps & {
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
        mixed={CitationData.mixed}
        elements={CitationData.elements}
        attributes={CitationData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Citation, {
  path: `*[namespace-uri()='${CitationData.namespace}' and local-name()='${CitationData.localName}']`,
});
