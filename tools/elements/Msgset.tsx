import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MsgsetData from "../defs/Msgset";

export { default as MsgsetData } from "../defs/Msgset";

export interface MsgsetProps {}

export interface MsgsetState {}

export class Msgset extends Transformer.Template<MsgsetProps, MsgsetState> {
  constructor(
    props: MsgsetProps & {
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
        mixed={MsgsetData.mixed}
        elements={MsgsetData.elements}
        attributes={MsgsetData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Msgset, {
  path: `*[namespace-uri()='${MsgsetData.namespace}' and local-name()='${MsgsetData.localName}']`,
});
