import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import WordaswordData from "../defs/Wordasword";

export { default as WordaswordData } from "../defs/Wordasword";

export interface WordaswordProps {}

export interface WordaswordState {}

export class Wordasword extends Transformer.Template<
  WordaswordProps,
  WordaswordState
> {
  constructor(
    props: WordaswordProps & {
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
        mixed={WordaswordData.mixed}
        elements={WordaswordData.elements}
        attributes={WordaswordData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Wordasword, {
  path: `*[namespace-uri()='${WordaswordData.namespace}' and local-name()='${WordaswordData.localName}']`,
});
