import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TdData from "../defs/Td";

export { default as TdData } from "../defs/Td";

export interface TdProps {}

export interface TdState {}

export class Td extends Transformer.Template<TdProps, TdState> {
  constructor(
    props: TdProps & {
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
        mixed={TdData.mixed}
        elements={TdData.elements}
        attributes={TdData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Td, {
  path: `*[namespace-uri()='${TdData.namespace}' and local-name()='${TdData.localName}']`,
});
