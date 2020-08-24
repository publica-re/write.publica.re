import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import VariablelistData from "../defs/Variablelist";

export { default as VariablelistData } from "../defs/Variablelist";

export interface VariablelistProps {}

export interface VariablelistState {}

export class Variablelist extends Transformer.Template<
  VariablelistProps,
  VariablelistState
> {
  constructor(
    props: VariablelistProps & {
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
        mixed={VariablelistData.mixed}
        elements={VariablelistData.elements}
        attributes={VariablelistData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Variablelist, {
  path: `*[namespace-uri()='${VariablelistData.namespace}' and local-name()='${VariablelistData.localName}']`,
});
