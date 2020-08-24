import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AnswerData from "../defs/Answer";

export { default as AnswerData } from "../defs/Answer";

export interface AnswerProps {}

export interface AnswerState {}

export class Answer extends Transformer.Template<AnswerProps, AnswerState> {
  constructor(
    props: AnswerProps & {
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
        mixed={AnswerData.mixed}
        elements={AnswerData.elements}
        attributes={AnswerData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Answer, {
  path: `*[namespace-uri()='${AnswerData.namespace}' and local-name()='${AnswerData.localName}']`,
});
