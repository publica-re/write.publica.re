import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TrData from "../defs/Tr";

export { default as TrData } from "../defs/Tr";

export interface TrProps {}

export interface TrState {}

export class Tr extends Transformer.Template<TrProps, TrState> {
  constructor(
    props: TrProps & {
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
        mixed={TrData.mixed}
        elements={TrData.elements}
        attributes={TrData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Tr, {
  path: `*[namespace-uri()='${TrData.namespace}' and local-name()='${TrData.localName}']`,
});
