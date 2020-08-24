import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import KeycodeData from "../defs/Keycode";

export { default as KeycodeData } from "../defs/Keycode";

export interface KeycodeProps {}

export interface KeycodeState {}

export class Keycode extends Transformer.Template<KeycodeProps, KeycodeState> {
  constructor(
    props: KeycodeProps & {
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
        mixed={KeycodeData.mixed}
        elements={KeycodeData.elements}
        attributes={KeycodeData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Keycode, {
  path: `*[namespace-uri()='${KeycodeData.namespace}' and local-name()='${KeycodeData.localName}']`,
});
