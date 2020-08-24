import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MsgrelData from "../defs/Msgrel";

export { default as MsgrelData } from "../defs/Msgrel";

export interface MsgrelProps {}

export interface MsgrelState {}

export class Msgrel extends Transformer.Template<MsgrelProps, MsgrelState> {
  constructor(
    props: MsgrelProps & {
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
        mixed={MsgrelData.mixed}
        elements={MsgrelData.elements}
        attributes={MsgrelData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Msgrel, {
  path: `*[namespace-uri()='${MsgrelData.namespace}' and local-name()='${MsgrelData.localName}']`,
});
