import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GuibuttonData from "../defs/Guibutton";

export { default as GuibuttonData } from "../defs/Guibutton";

export interface GuibuttonProps {}

export interface GuibuttonState {}

export class Guibutton extends Transformer.Template<
  GuibuttonProps,
  GuibuttonState
> {
  constructor(
    props: GuibuttonProps & {
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
        mixed={GuibuttonData.mixed}
        elements={GuibuttonData.elements}
        attributes={GuibuttonData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Guibutton, {
  path: `*[namespace-uri()='${GuibuttonData.namespace}' and local-name()='${GuibuttonData.localName}']`,
});
