import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BridgeheadData from "../defs/Bridgehead";

export { default as BridgeheadData } from "../defs/Bridgehead";

export interface BridgeheadProps {}

export interface BridgeheadState {}

export class Bridgehead extends Transformer.Template<
  BridgeheadProps,
  BridgeheadState
> {
  constructor(
    props: BridgeheadProps & {
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
        mixed={BridgeheadData.mixed}
        elements={BridgeheadData.elements}
        attributes={BridgeheadData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Bridgehead, {
  path: `*[namespace-uri()='${BridgeheadData.namespace}' and local-name()='${BridgeheadData.localName}']`,
});
