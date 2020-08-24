import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MousebuttonData from "../defs/Mousebutton";

export { default as MousebuttonData } from "../defs/Mousebutton";

export interface MousebuttonProps {}

export interface MousebuttonState {}

export class Mousebutton extends Transformer.Template<
  MousebuttonProps,
  MousebuttonState
> {
  constructor(
    props: MousebuttonProps & {
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
        mixed={MousebuttonData.mixed}
        elements={MousebuttonData.elements}
        attributes={MousebuttonData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Mousebutton, {
  path: `*[namespace-uri()='${MousebuttonData.namespace}' and local-name()='${MousebuttonData.localName}']`,
});
