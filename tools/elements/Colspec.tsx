import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ColspecData from "../defs/Colspec";

export { default as ColspecData } from "../defs/Colspec";

export interface ColspecProps {}

export interface ColspecState {}

export class Colspec extends Transformer.Template<ColspecProps, ColspecState> {
  constructor(
    props: ColspecProps & {
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
        mixed={ColspecData.mixed}
        elements={ColspecData.elements}
        attributes={ColspecData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Colspec, {
  path: `*[namespace-uri()='${ColspecData.namespace}' and local-name()='${ColspecData.localName}']`,
});
