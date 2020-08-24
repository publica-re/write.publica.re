import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FuncdefData from "../defs/Funcdef";

export { default as FuncdefData } from "../defs/Funcdef";

export interface FuncdefProps {}

export interface FuncdefState {}

export class Funcdef extends Transformer.Template<FuncdefProps, FuncdefState> {
  constructor(
    props: FuncdefProps & {
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
        mixed={FuncdefData.mixed}
        elements={FuncdefData.elements}
        attributes={FuncdefData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Funcdef, {
  path: `*[namespace-uri()='${FuncdefData.namespace}' and local-name()='${FuncdefData.localName}']`,
});
