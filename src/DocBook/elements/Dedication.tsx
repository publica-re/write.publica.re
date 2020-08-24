import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import DedicationData from "../defs/Dedication";

export { default as DedicationData } from "../defs/Dedication";

export interface DedicationProps {}

export interface DedicationState {}

export class Dedication extends Transformer.Template<
  DedicationProps,
  DedicationState
> {
  constructor(
    props: DedicationProps & {
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
        mixed={DedicationData.mixed}
        elements={DedicationData.elements}
        attributes={DedicationData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Dedication, {
  path: `*[namespace-uri()='${DedicationData.namespace}' and local-name()='${DedicationData.localName}']`,
});
