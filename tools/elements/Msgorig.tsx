import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MsgorigData from "../defs/Msgorig";

export { default as MsgorigData } from "../defs/Msgorig";

export interface MsgorigProps {}

export interface MsgorigState {}

export class Msgorig extends Transformer.Template<MsgorigProps, MsgorigState> {
  constructor(
    props: MsgorigProps & {
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
        mixed={MsgorigData.mixed}
        elements={MsgorigData.elements}
        attributes={MsgorigData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Msgorig, {
  path: `*[namespace-uri()='${MsgorigData.namespace}' and local-name()='${MsgorigData.localName}']`,
});
