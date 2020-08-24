import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import StepData from "../defs/Step";

export { default as StepData } from "../defs/Step";

export interface StepProps {}

export interface StepState {}

export class Step extends Transformer.Template<StepProps, StepState> {
  constructor(
    props: StepProps & {
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
        mixed={StepData.mixed}
        elements={StepData.elements}
        attributes={StepData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Step, {
  path: `*[namespace-uri()='${StepData.namespace}' and local-name()='${StepData.localName}']`,
});
