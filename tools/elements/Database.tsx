import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import DatabaseData from "../defs/Database";

export { default as DatabaseData } from "../defs/Database";

export interface DatabaseProps {}

export interface DatabaseState {}

export class Database extends Transformer.Template<
  DatabaseProps,
  DatabaseState
> {
  constructor(
    props: DatabaseProps & {
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
        mixed={DatabaseData.mixed}
        elements={DatabaseData.elements}
        attributes={DatabaseData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Database, {
  path: `*[namespace-uri()='${DatabaseData.namespace}' and local-name()='${DatabaseData.localName}']`,
});
