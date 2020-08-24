import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import EmphasisData from "../defs/Emphasis";

export { default as EmphasisData } from "../defs/Emphasis";

export interface EmphasisProps {}

export interface EmphasisState {}

export class Emphasis extends Transformer.Template<
  EmphasisProps,
  EmphasisState
> {
  constructor(
    props: EmphasisProps & {
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
        mixed={EmphasisData.mixed}
        elements={EmphasisData.elements}
        attributes={EmphasisData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Emphasis, {
  path: `*[namespace-uri()='${EmphasisData.namespace}' and local-name()='${EmphasisData.localName}']`,
});
