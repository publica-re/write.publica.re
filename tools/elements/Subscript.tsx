import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SubscriptData from "../defs/Subscript";

export { default as SubscriptData } from "../defs/Subscript";

export interface SubscriptProps {}

export interface SubscriptState {}

export class Subscript extends Transformer.Template<
  SubscriptProps,
  SubscriptState
> {
  constructor(
    props: SubscriptProps & {
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
        mixed={SubscriptData.mixed}
        elements={SubscriptData.elements}
        attributes={SubscriptData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Subscript, {
  path: `*[namespace-uri()='${SubscriptData.namespace}' and local-name()='${SubscriptData.localName}']`,
});
