import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ProcedureData from "../defs/Procedure";

export { default as ProcedureData } from "../defs/Procedure";

export interface ProcedureProps {}

export interface ProcedureState {}

export class Procedure extends Transformer.Template<
  ProcedureProps,
  ProcedureState
> {
  constructor(
    props: ProcedureProps & {
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
        mixed={ProcedureData.mixed}
        elements={ProcedureData.elements}
        attributes={ProcedureData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Procedure, {
  path: `*[namespace-uri()='${ProcedureData.namespace}' and local-name()='${ProcedureData.localName}']`,
});
