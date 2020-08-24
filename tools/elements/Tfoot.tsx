import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TfootData from "../defs/Tfoot";

export { default as TfootData } from "../defs/Tfoot";

export interface TfootProps {}

export interface TfootState {}

export class Tfoot extends Transformer.Template<TfootProps, TfootState> {
  constructor(
    props: TfootProps & {
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
        mixed={TfootData.mixed}
        elements={TfootData.elements}
        attributes={TfootData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Tfoot, {
  path: `*[namespace-uri()='${TfootData.namespace}' and local-name()='${TfootData.localName}']`,
});
