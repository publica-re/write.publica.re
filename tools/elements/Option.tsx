import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import OptionData from "../defs/Option";

export { default as OptionData } from "../defs/Option";

export interface OptionProps {}

export interface OptionState {}

export class Option extends Transformer.Template<OptionProps, OptionState> {
  constructor(
    props: OptionProps & {
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
        mixed={OptionData.mixed}
        elements={OptionData.elements}
        attributes={OptionData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Option, {
  path: `*[namespace-uri()='${OptionData.namespace}' and local-name()='${OptionData.localName}']`,
});
