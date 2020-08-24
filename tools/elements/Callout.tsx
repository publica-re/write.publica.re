import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CalloutData from "../defs/Callout";

export { default as CalloutData } from "../defs/Callout";

export interface CalloutProps {}

export interface CalloutState {}

export class Callout extends Transformer.Template<CalloutProps, CalloutState> {
  constructor(
    props: CalloutProps & {
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
        mixed={CalloutData.mixed}
        elements={CalloutData.elements}
        attributes={CalloutData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Callout, {
  path: `*[namespace-uri()='${CalloutData.namespace}' and local-name()='${CalloutData.localName}']`,
});
