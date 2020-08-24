import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ConstantData from "../defs/Constant";

export { default as ConstantData } from "../defs/Constant";

export interface ConstantProps {}

export interface ConstantState {}

export class Constant extends Transformer.Template<
  ConstantProps,
  ConstantState
> {
  constructor(
    props: ConstantProps & {
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
        mixed={ConstantData.mixed}
        elements={ConstantData.elements}
        attributes={ConstantData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Constant, {
  path: `*[namespace-uri()='${ConstantData.namespace}' and local-name()='${ConstantData.localName}']`,
});
