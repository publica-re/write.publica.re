import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import KeywordsetData from "../defs/Keywordset";

export { default as KeywordsetData } from "../defs/Keywordset";

export interface KeywordsetProps {}

export interface KeywordsetState {}

export class Keywordset extends Transformer.Template<
  KeywordsetProps,
  KeywordsetState
> {
  constructor(
    props: KeywordsetProps & {
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
        mixed={KeywordsetData.mixed}
        elements={KeywordsetData.elements}
        attributes={KeywordsetData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Keywordset, {
  path: `*[namespace-uri()='${KeywordsetData.namespace}' and local-name()='${KeywordsetData.localName}']`,
});
