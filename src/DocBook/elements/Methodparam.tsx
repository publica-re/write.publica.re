import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MethodparamData from "../defs/Methodparam";

export { default as MethodparamData } from "../defs/Methodparam";

export interface MethodparamProps {}

export interface MethodparamState {}

export class Methodparam extends Transformer.Template<
  MethodparamProps,
  MethodparamState
> {
  constructor(
    props: MethodparamProps & {
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
        mixed={MethodparamData.mixed}
        elements={MethodparamData.elements}
        attributes={MethodparamData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Methodparam, {
  path: `*[namespace-uri()='${MethodparamData.namespace}' and local-name()='${MethodparamData.localName}']`,
});
