import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import OptionalData from "../defs/Optional";

export { default as OptionalData } from "../defs/Optional";

export interface OptionalProps {}

export interface OptionalState {}

export class Optional extends Transformer.Template<
  OptionalProps,
  OptionalState
> {
  constructor(
    props: OptionalProps & {
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
        mixed={OptionalData.mixed}
        elements={OptionalData.elements}
        attributes={OptionalData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Optional, {
  path: `*[namespace-uri()='${OptionalData.namespace}' and local-name()='${OptionalData.localName}']`,
});
