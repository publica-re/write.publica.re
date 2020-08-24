import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RefentrytitleData from "../defs/Refentrytitle";

export { default as RefentrytitleData } from "../defs/Refentrytitle";

export interface RefentrytitleProps {}

export interface RefentrytitleState {}

export class Refentrytitle extends Transformer.Template<
  RefentrytitleProps,
  RefentrytitleState
> {
  constructor(
    props: RefentrytitleProps & {
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
        mixed={RefentrytitleData.mixed}
        elements={RefentrytitleData.elements}
        attributes={RefentrytitleData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Refentrytitle, {
  path: `*[namespace-uri()='${RefentrytitleData.namespace}' and local-name()='${RefentrytitleData.localName}']`,
});
