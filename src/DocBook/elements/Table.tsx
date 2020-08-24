import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TableData from "../defs/Table";

export { default as TableData } from "../defs/Table";

export interface TableProps {}

export interface TableState {}

export class Table extends Transformer.Template<TableProps, TableState> {
  constructor(
    props: TableProps & {
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
        mixed={TableData.mixed}
        elements={TableData.elements}
        attributes={TableData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Table, {
  path: `*[namespace-uri()='${TableData.namespace}' and local-name()='${TableData.localName}']`,
});
