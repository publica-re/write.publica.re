import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import KeycapData from "../defs/Keycap";

export { default as KeycapData } from "../defs/Keycap";

export interface KeycapProps {}

export interface KeycapState {}

export class Keycap extends Transformer.Template<KeycapProps, KeycapState> {
  constructor(
    props: KeycapProps & {
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
        mixed={KeycapData.mixed}
        elements={KeycapData.elements}
        attributes={KeycapData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Keycap, {
  path: `*[namespace-uri()='${KeycapData.namespace}' and local-name()='${KeycapData.localName}']`,
});
