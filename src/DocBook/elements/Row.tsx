import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RowData from "../defs/Row";

export { default as RowData } from "../defs/Row";

export interface RowProps {}

export interface RowState {}

export class Row extends Transformer.Template<RowProps, RowState> {
  constructor(
    props: RowProps & {
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
        mixed={RowData.mixed}
        elements={RowData.elements}
        attributes={RowData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Row, {
  path: `*[namespace-uri()='${RowData.namespace}' and local-name()='${RowData.localName}']`,
});
