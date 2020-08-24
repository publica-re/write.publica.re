import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TheadData from "../defs/Thead";

export { default as TheadData } from "../defs/Thead";

export interface TheadProps {}

export interface TheadState {}

export class Thead extends Transformer.Template<TheadProps, TheadState> {
  constructor(
    props: TheadProps & {
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
        mixed={TheadData.mixed}
        elements={TheadData.elements}
        attributes={TheadData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Thead, {
  path: `*[namespace-uri()='${TheadData.namespace}' and local-name()='${TheadData.localName}']`,
});
