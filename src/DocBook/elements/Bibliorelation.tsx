import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BibliorelationData from "../defs/Bibliorelation";

export { default as BibliorelationData } from "../defs/Bibliorelation";

export interface BibliorelationProps {}

export interface BibliorelationState {}

export class Bibliorelation extends Transformer.Template<
  BibliorelationProps,
  BibliorelationState
> {
  constructor(
    props: BibliorelationProps & {
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
        mixed={BibliorelationData.mixed}
        elements={BibliorelationData.elements}
        attributes={BibliorelationData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Bibliorelation, {
  path: `*[namespace-uri()='${BibliorelationData.namespace}' and local-name()='${BibliorelationData.localName}']`,
});
