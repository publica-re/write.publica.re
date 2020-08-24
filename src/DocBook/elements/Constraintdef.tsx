import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ConstraintdefData from "../defs/Constraintdef";

export { default as ConstraintdefData } from "../defs/Constraintdef";

export interface ConstraintdefProps {}

export interface ConstraintdefState {}

export class Constraintdef extends Transformer.Template<
  ConstraintdefProps,
  ConstraintdefState
> {
  constructor(
    props: ConstraintdefProps & {
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
        mixed={ConstraintdefData.mixed}
        elements={ConstraintdefData.elements}
        attributes={ConstraintdefData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Constraintdef, {
  path: `*[namespace-uri()='${ConstraintdefData.namespace}' and local-name()='${ConstraintdefData.localName}']`,
});
