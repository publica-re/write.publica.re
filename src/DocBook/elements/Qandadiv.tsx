import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import QandadivData from "../defs/Qandadiv";

export { default as QandadivData } from "../defs/Qandadiv";

export interface QandadivProps {}

export interface QandadivState {}

export class Qandadiv extends Transformer.Template<
  QandadivProps,
  QandadivState
> {
  constructor(
    props: QandadivProps & {
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
        mixed={QandadivData.mixed}
        elements={QandadivData.elements}
        attributes={QandadivData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Qandadiv, {
  path: `*[namespace-uri()='${QandadivData.namespace}' and local-name()='${QandadivData.localName}']`,
});
