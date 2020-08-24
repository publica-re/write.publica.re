import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MsgentryData from "../defs/Msgentry";

export { default as MsgentryData } from "../defs/Msgentry";

export interface MsgentryProps {}

export interface MsgentryState {}

export class Msgentry extends Transformer.Template<
  MsgentryProps,
  MsgentryState
> {
  constructor(
    props: MsgentryProps & {
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
        mixed={MsgentryData.mixed}
        elements={MsgentryData.elements}
        attributes={MsgentryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Msgentry, {
  path: `*[namespace-uri()='${MsgentryData.namespace}' and local-name()='${MsgentryData.localName}']`,
});
