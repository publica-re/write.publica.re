import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TrademarkData from "../defs/Trademark";

export { default as TrademarkData } from "../defs/Trademark";

export interface TrademarkProps {}

export interface TrademarkState {}

export class Trademark extends Transformer.Template<
  TrademarkProps,
  TrademarkState
> {
  constructor(
    props: TrademarkProps & {
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
        mixed={TrademarkData.mixed}
        elements={TrademarkData.elements}
        attributes={TrademarkData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Trademark, {
  path: `*[namespace-uri()='${TrademarkData.namespace}' and local-name()='${TrademarkData.localName}']`,
});
