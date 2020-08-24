import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TipData from "../defs/Tip";

export { default as TipData } from "../defs/Tip";

export interface TipProps {}

export interface TipState {}

export class Tip extends Transformer.Template<TipProps, TipState> {
  constructor(
    props: TipProps & {
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
        mixed={TipData.mixed}
        elements={TipData.elements}
        attributes={TipData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Tip, {
  path: `*[namespace-uri()='${TipData.namespace}' and local-name()='${TipData.localName}']`,
});
