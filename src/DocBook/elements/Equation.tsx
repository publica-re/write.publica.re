import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import EquationData from "../defs/Equation";

export { default as EquationData } from "../defs/Equation";

export interface EquationProps {}

export interface EquationState {}

export class Equation extends Transformer.Template<
  EquationProps,
  EquationState
> {
  constructor(
    props: EquationProps & {
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
        mixed={EquationData.mixed}
        elements={EquationData.elements}
        attributes={EquationData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Equation, {
  path: `*[namespace-uri()='${EquationData.namespace}' and local-name()='${EquationData.localName}']`,
});
