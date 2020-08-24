import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import EntryData from "../defs/Entry";

export { default as EntryData } from "../defs/Entry";

export interface EntryProps {}

export interface EntryState {}

export class Entry extends Transformer.Template<EntryProps, EntryState> {
  constructor(
    props: EntryProps & {
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
        mixed={EntryData.mixed}
        elements={EntryData.elements}
        attributes={EntryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Entry, {
  path: `*[namespace-uri()='${EntryData.namespace}' and local-name()='${EntryData.localName}']`,
});
