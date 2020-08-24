import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import IndexData from "../defs/Index";

export { default as IndexData } from "../defs/Index";

export interface IndexProps {}

export interface IndexState {}

export class Index extends Transformer.Template<IndexProps, IndexState> {
  constructor(
    props: IndexProps & {
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
        mixed={IndexData.mixed}
        elements={IndexData.elements}
        attributes={IndexData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Index, {
  path: `*[namespace-uri()='${IndexData.namespace}' and local-name()='${IndexData.localName}']`,
});
