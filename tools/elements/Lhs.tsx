import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import LhsData from "../defs/Lhs";

export { default as LhsData } from "../defs/Lhs";

export interface LhsProps {}

export interface LhsState {}

export class Lhs extends Transformer.Template<LhsProps, LhsState> {
  constructor(
    props: LhsProps & {
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
        mixed={LhsData.mixed}
        elements={LhsData.elements}
        attributes={LhsData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Lhs, {
  path: `*[namespace-uri()='${LhsData.namespace}' and local-name()='${LhsData.localName}']`,
});
