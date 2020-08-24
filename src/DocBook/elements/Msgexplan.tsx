import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MsgexplanData from "../defs/Msgexplan";

export { default as MsgexplanData } from "../defs/Msgexplan";

export interface MsgexplanProps {}

export interface MsgexplanState {}

export class Msgexplan extends Transformer.Template<
  MsgexplanProps,
  MsgexplanState
> {
  constructor(
    props: MsgexplanProps & {
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
        mixed={MsgexplanData.mixed}
        elements={MsgexplanData.elements}
        attributes={MsgexplanData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Msgexplan, {
  path: `*[namespace-uri()='${MsgexplanData.namespace}' and local-name()='${MsgexplanData.localName}']`,
});
