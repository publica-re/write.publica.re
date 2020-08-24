import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CodeData from "../defs/Code";

export { default as CodeData } from "../defs/Code";

export interface CodeProps {}

export interface CodeState {}

export class Code extends Transformer.Template<CodeProps, CodeState> {
  constructor(
    props: CodeProps & {
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
        mixed={CodeData.mixed}
        elements={CodeData.elements}
        attributes={CodeData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Code, {
  path: `*[namespace-uri()='${CodeData.namespace}' and local-name()='${CodeData.localName}']`,
});
