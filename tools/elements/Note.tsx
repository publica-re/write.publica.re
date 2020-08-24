import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import NoteData from "../defs/Note";

export { default as NoteData } from "../defs/Note";

export interface NoteProps {}

export interface NoteState {}

export class Note extends Transformer.Template<NoteProps, NoteState> {
  constructor(
    props: NoteProps & {
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
        mixed={NoteData.mixed}
        elements={NoteData.elements}
        attributes={NoteData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Note, {
  path: `*[namespace-uri()='${NoteData.namespace}' and local-name()='${NoteData.localName}']`,
});
