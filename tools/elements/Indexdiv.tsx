import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import IndexdivData from "../defs/Indexdiv";

export { default as IndexdivData } from "../defs/Indexdiv";

export interface IndexdivProps {}

export interface IndexdivState {}

export class Indexdiv extends Transformer.Template<
  IndexdivProps,
  IndexdivState
> {
  constructor(
    props: IndexdivProps & {
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
        mixed={IndexdivData.mixed}
        elements={IndexdivData.elements}
        attributes={IndexdivData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Indexdiv, {
  path: `*[namespace-uri()='${IndexdivData.namespace}' and local-name()='${IndexdivData.localName}']`,
});
