import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FuncparamsData from "../defs/Funcparams";

export { default as FuncparamsData } from "../defs/Funcparams";

export interface FuncparamsProps {}

export interface FuncparamsState {}

export class Funcparams extends Transformer.Template<
  FuncparamsProps,
  FuncparamsState
> {
  constructor(
    props: FuncparamsProps & {
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
        mixed={FuncparamsData.mixed}
        elements={FuncparamsData.elements}
        attributes={FuncparamsData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Funcparams, {
  path: `*[namespace-uri()='${FuncparamsData.namespace}' and local-name()='${FuncparamsData.localName}']`,
});
