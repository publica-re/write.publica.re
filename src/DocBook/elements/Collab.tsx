import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CollabData from "../defs/Collab";

export { default as CollabData } from "../defs/Collab";

export interface CollabProps {}

export interface CollabState {}

export class Collab extends Transformer.Template<CollabProps, CollabState> {
  constructor(
    props: CollabProps & {
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
        mixed={CollabData.mixed}
        elements={CollabData.elements}
        attributes={CollabData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Collab, {
  path: `*[namespace-uri()='${CollabData.namespace}' and local-name()='${CollabData.localName}']`,
});
