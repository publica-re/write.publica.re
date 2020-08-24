import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MsgData from "../defs/Msg";

export { default as MsgData } from "../defs/Msg";

export interface MsgProps {}

export interface MsgState {}

export class Msg extends Transformer.Template<MsgProps, MsgState> {
  constructor(
    props: MsgProps & {
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
        mixed={MsgData.mixed}
        elements={MsgData.elements}
        attributes={MsgData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Msg, {
  path: `*[namespace-uri()='${MsgData.namespace}' and local-name()='${MsgData.localName}']`,
});
