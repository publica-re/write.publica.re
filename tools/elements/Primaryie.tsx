import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PrimaryieData from "../defs/Primaryie";

export { default as PrimaryieData } from "../defs/Primaryie";

export interface PrimaryieProps {}

export interface PrimaryieState {}

export class Primaryie extends Transformer.Template<
  PrimaryieProps,
  PrimaryieState
> {
  constructor(
    props: PrimaryieProps & {
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
        mixed={PrimaryieData.mixed}
        elements={PrimaryieData.elements}
        attributes={PrimaryieData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Primaryie, {
  path: `*[namespace-uri()='${PrimaryieData.namespace}' and local-name()='${PrimaryieData.localName}']`,
});
