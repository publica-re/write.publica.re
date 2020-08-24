import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FuncsynopsisData from "../defs/Funcsynopsis";

export { default as FuncsynopsisData } from "../defs/Funcsynopsis";

export interface FuncsynopsisProps {}

export interface FuncsynopsisState {}

export class Funcsynopsis extends Transformer.Template<
  FuncsynopsisProps,
  FuncsynopsisState
> {
  constructor(
    props: FuncsynopsisProps & {
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
        mixed={FuncsynopsisData.mixed}
        elements={FuncsynopsisData.elements}
        attributes={FuncsynopsisData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Funcsynopsis, {
  path: `*[namespace-uri()='${FuncsynopsisData.namespace}' and local-name()='${FuncsynopsisData.localName}']`,
});
