import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import KeywordData from "../defs/Keyword";

export { default as KeywordData } from "../defs/Keyword";

export interface KeywordProps {}

export interface KeywordState {}

export class Keyword extends Transformer.Template<KeywordProps, KeywordState> {
  constructor(
    props: KeywordProps & {
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
        mixed={KeywordData.mixed}
        elements={KeywordData.elements}
        attributes={KeywordData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Keyword, {
  path: `*[namespace-uri()='${KeywordData.namespace}' and local-name()='${KeywordData.localName}']`,
});
