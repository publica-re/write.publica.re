import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import StateData from "../defs/State";

export { default as StateData } from "../defs/State";

export interface StateProps {}

export interface StateState {}

export class State extends Transformer.Template<StateProps, StateState> {
  constructor(
    props: StateProps & {
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
        mixed={StateData.mixed}
        elements={StateData.elements}
        attributes={StateData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(State, {
  path: `*[namespace-uri()='${StateData.namespace}' and local-name()='${StateData.localName}']`,
});
