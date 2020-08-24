import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TertiaryieData from "../defs/Tertiaryie";

export { default as TertiaryieData } from "../defs/Tertiaryie";

export interface TertiaryieProps {}

export interface TertiaryieState {}

export class Tertiaryie extends Transformer.Template<
  TertiaryieProps,
  TertiaryieState
> {
  constructor(
    props: TertiaryieProps & {
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
        mixed={TertiaryieData.mixed}
        elements={TertiaryieData.elements}
        attributes={TertiaryieData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Tertiaryie, {
  path: `*[namespace-uri()='${TertiaryieData.namespace}' and local-name()='${TertiaryieData.localName}']`,
});
