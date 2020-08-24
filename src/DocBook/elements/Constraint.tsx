import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ConstraintData from "../defs/Constraint";

export { default as ConstraintData } from "../defs/Constraint";

export interface ConstraintProps {}

export interface ConstraintState {}

export class Constraint extends Transformer.Template<
  ConstraintProps,
  ConstraintState
> {
  constructor(
    props: ConstraintProps & {
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
        mixed={ConstraintData.mixed}
        elements={ConstraintData.elements}
        attributes={ConstraintData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Constraint, {
  path: `*[namespace-uri()='${ConstraintData.namespace}' and local-name()='${ConstraintData.localName}']`,
});
