import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FunctionData from "../defs/Function";

export { default as FunctionData } from "../defs/Function";

export interface FunctionProps {}

export interface FunctionState {}

export class Function extends Transformer.Template<
  FunctionProps,
  FunctionState
> {
  constructor(
    props: FunctionProps & {
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
        mixed={FunctionData.mixed}
        elements={FunctionData.elements}
        attributes={FunctionData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Function, {
  path: `*[namespace-uri()='${FunctionData.namespace}' and local-name()='${FunctionData.localName}']`,
});
