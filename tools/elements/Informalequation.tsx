import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import InformalequationData from "../defs/Informalequation";

export { default as InformalequationData } from "../defs/Informalequation";

export interface InformalequationProps {}

export interface InformalequationState {}

export class Informalequation extends Transformer.Template<
  InformalequationProps,
  InformalequationState
> {
  constructor(
    props: InformalequationProps & {
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
        mixed={InformalequationData.mixed}
        elements={InformalequationData.elements}
        attributes={InformalequationData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Informalequation, {
  path: `*[namespace-uri()='${InformalequationData.namespace}' and local-name()='${InformalequationData.localName}']`,
});
