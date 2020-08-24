import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MsgmainData from "../defs/Msgmain";

export { default as MsgmainData } from "../defs/Msgmain";

export interface MsgmainProps {}

export interface MsgmainState {}

export class Msgmain extends Transformer.Template<MsgmainProps, MsgmainState> {
  constructor(
    props: MsgmainProps & {
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
        mixed={MsgmainData.mixed}
        elements={MsgmainData.elements}
        attributes={MsgmainData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Msgmain, {
  path: `*[namespace-uri()='${MsgmainData.namespace}' and local-name()='${MsgmainData.localName}']`,
});
