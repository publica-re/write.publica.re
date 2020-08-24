import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FuncprototypeData from "../defs/Funcprototype";

export { default as FuncprototypeData } from "../defs/Funcprototype";

export interface FuncprototypeProps {}

export interface FuncprototypeState {}

export class Funcprototype extends Transformer.Template<
  FuncprototypeProps,
  FuncprototypeState
> {
  constructor(
    props: FuncprototypeProps & {
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
        mixed={FuncprototypeData.mixed}
        elements={FuncprototypeData.elements}
        attributes={FuncprototypeData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Funcprototype, {
  path: `*[namespace-uri()='${FuncprototypeData.namespace}' and local-name()='${FuncprototypeData.localName}']`,
});
