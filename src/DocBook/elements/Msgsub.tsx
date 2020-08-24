import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MsgsubData from "../defs/Msgsub";

export { default as MsgsubData } from "../defs/Msgsub";

export interface MsgsubProps {}

export interface MsgsubState {}

export class Msgsub extends Transformer.Template<MsgsubProps, MsgsubState> {
  constructor(
    props: MsgsubProps & {
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
        mixed={MsgsubData.mixed}
        elements={MsgsubData.elements}
        attributes={MsgsubData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Msgsub, {
  path: `*[namespace-uri()='${MsgsubData.namespace}' and local-name()='${MsgsubData.localName}']`,
});
