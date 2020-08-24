import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ParameterData from "../defs/Parameter";

export { default as ParameterData } from "../defs/Parameter";

export interface ParameterProps {}

export interface ParameterState {}

export class Parameter extends Transformer.Template<
  ParameterProps,
  ParameterState
> {
  constructor(
    props: ParameterProps & {
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
        mixed={ParameterData.mixed}
        elements={ParameterData.elements}
        attributes={ParameterData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Parameter, {
  path: `*[namespace-uri()='${ParameterData.namespace}' and local-name()='${ParameterData.localName}']`,
});
