import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SeealsoieData from "../defs/Seealsoie";

export { default as SeealsoieData } from "../defs/Seealsoie";

export interface SeealsoieProps {}

export interface SeealsoieState {}

export class Seealsoie extends Transformer.Template<
  SeealsoieProps,
  SeealsoieState
> {
  constructor(
    props: SeealsoieProps & {
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
        mixed={SeealsoieData.mixed}
        elements={SeealsoieData.elements}
        attributes={SeealsoieData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Seealsoie, {
  path: `*[namespace-uri()='${SeealsoieData.namespace}' and local-name()='${SeealsoieData.localName}']`,
});
