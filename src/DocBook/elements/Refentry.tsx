import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RefentryData from "../defs/Refentry";

export { default as RefentryData } from "../defs/Refentry";

export interface RefentryProps {}

export interface RefentryState {}

export class Refentry extends Transformer.Template<
  RefentryProps,
  RefentryState
> {
  constructor(
    props: RefentryProps & {
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
        mixed={RefentryData.mixed}
        elements={RefentryData.elements}
        attributes={RefentryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Refentry, {
  path: `*[namespace-uri()='${RefentryData.namespace}' and local-name()='${RefentryData.localName}']`,
});
