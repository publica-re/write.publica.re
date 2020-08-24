import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MenuchoiceData from "../defs/Menuchoice";

export { default as MenuchoiceData } from "../defs/Menuchoice";

export interface MenuchoiceProps {}

export interface MenuchoiceState {}

export class Menuchoice extends Transformer.Template<
  MenuchoiceProps,
  MenuchoiceState
> {
  constructor(
    props: MenuchoiceProps & {
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
        mixed={MenuchoiceData.mixed}
        elements={MenuchoiceData.elements}
        attributes={MenuchoiceData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Menuchoice, {
  path: `*[namespace-uri()='${MenuchoiceData.namespace}' and local-name()='${MenuchoiceData.localName}']`,
});
