import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RhsData from "../defs/Rhs";

export { default as RhsData } from "../defs/Rhs";

export interface RhsProps {}

export interface RhsState {}

export class Rhs extends Transformer.Template<RhsProps, RhsState> {
  constructor(
    props: RhsProps & {
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
        mixed={RhsData.mixed}
        elements={RhsData.elements}
        attributes={RhsData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Rhs, {
  path: `*[namespace-uri()='${RhsData.namespace}' and local-name()='${RhsData.localName}']`,
});
