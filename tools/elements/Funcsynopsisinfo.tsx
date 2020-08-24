import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FuncsynopsisinfoData from "../defs/Funcsynopsisinfo";

export { default as FuncsynopsisinfoData } from "../defs/Funcsynopsisinfo";

export interface FuncsynopsisinfoProps {}

export interface FuncsynopsisinfoState {}

export class Funcsynopsisinfo extends Transformer.Template<
  FuncsynopsisinfoProps,
  FuncsynopsisinfoState
> {
  constructor(
    props: FuncsynopsisinfoProps & {
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
        mixed={FuncsynopsisinfoData.mixed}
        elements={FuncsynopsisinfoData.elements}
        attributes={FuncsynopsisinfoData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Funcsynopsisinfo, {
  path: `*[namespace-uri()='${FuncsynopsisinfoData.namespace}' and local-name()='${FuncsynopsisinfoData.localName}']`,
});
