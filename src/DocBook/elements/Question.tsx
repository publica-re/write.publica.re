import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import QuestionData from "../defs/Question";

export { default as QuestionData } from "../defs/Question";

export interface QuestionProps {}

export interface QuestionState {}

export class Question extends Transformer.Template<
  QuestionProps,
  QuestionState
> {
  constructor(
    props: QuestionProps & {
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
        mixed={QuestionData.mixed}
        elements={QuestionData.elements}
        attributes={QuestionData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Question, {
  path: `*[namespace-uri()='${QuestionData.namespace}' and local-name()='${QuestionData.localName}']`,
});
