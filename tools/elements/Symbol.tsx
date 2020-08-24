import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SymbolData from "../defs/Symbol";

export { default as SymbolData } from "../defs/Symbol";

export interface SymbolProps {}

export interface SymbolState {}

export class Symbol extends Transformer.Template<SymbolProps, SymbolState> {
  constructor(
    props: SymbolProps & {
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
        mixed={SymbolData.mixed}
        elements={SymbolData.elements}
        attributes={SymbolData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Symbol, {
  path: `*[namespace-uri()='${SymbolData.namespace}' and local-name()='${SymbolData.localName}']`,
});
