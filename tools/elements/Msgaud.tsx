import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MsgaudData from "../defs/Msgaud";

export { default as MsgaudData } from "../defs/Msgaud";

export interface MsgaudProps {}

export interface MsgaudState {}

export class Msgaud extends Transformer.Template<MsgaudProps, MsgaudState> {
  constructor(
    props: MsgaudProps & {
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
        mixed={MsgaudData.mixed}
        elements={MsgaudData.elements}
        attributes={MsgaudData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Msgaud, {
  path: `*[namespace-uri()='${MsgaudData.namespace}' and local-name()='${MsgaudData.localName}']`,
});
