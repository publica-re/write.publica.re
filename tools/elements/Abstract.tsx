import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AbstractData from "../defs/Abstract";

export { default as AbstractData } from "../defs/Abstract";

export interface AbstractProps {}

export interface AbstractState {}

export class Abstract extends Transformer.Template<
  AbstractProps,
  AbstractState
> {
  constructor(
    props: AbstractProps & {
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
        mixed={AbstractData.mixed}
        elements={AbstractData.elements}
        attributes={AbstractData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Abstract, {
  path: `*[namespace-uri()='${AbstractData.namespace}' and local-name()='${AbstractData.localName}']`,
});
