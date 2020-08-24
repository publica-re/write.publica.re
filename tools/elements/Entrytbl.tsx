import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import EntrytblData from "../defs/Entrytbl";

export { default as EntrytblData } from "../defs/Entrytbl";

export interface EntrytblProps {}

export interface EntrytblState {}

export class Entrytbl extends Transformer.Template<
  EntrytblProps,
  EntrytblState
> {
  constructor(
    props: EntrytblProps & {
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
        mixed={EntrytblData.mixed}
        elements={EntrytblData.elements}
        attributes={EntrytblData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Entrytbl, {
  path: `*[namespace-uri()='${EntrytblData.namespace}' and local-name()='${EntrytblData.localName}']`,
});
