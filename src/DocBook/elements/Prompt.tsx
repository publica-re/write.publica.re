import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PromptData from "../defs/Prompt";

export { default as PromptData } from "../defs/Prompt";

export interface PromptProps {}

export interface PromptState {}

export class Prompt extends Transformer.Template<PromptProps, PromptState> {
  constructor(
    props: PromptProps & {
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
        mixed={PromptData.mixed}
        elements={PromptData.elements}
        attributes={PromptData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Prompt, {
  path: `*[namespace-uri()='${PromptData.namespace}' and local-name()='${PromptData.localName}']`,
});
