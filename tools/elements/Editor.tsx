import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import EditorData from "../defs/Editor";

export { default as EditorData } from "../defs/Editor";

export interface EditorProps {}

export interface EditorState {}

export class Editor extends Transformer.Template<EditorProps, EditorState> {
  constructor(
    props: EditorProps & {
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
        mixed={EditorData.mixed}
        elements={EditorData.elements}
        attributes={EditorData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Editor, {
  path: `*[namespace-uri()='${EditorData.namespace}' and local-name()='${EditorData.localName}']`,
});
