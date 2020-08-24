import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import KeysymData from "../defs/Keysym";

export { default as KeysymData } from "../defs/Keysym";

export interface KeysymProps {}

export interface KeysymState {}

export class Keysym extends Transformer.Template<KeysymProps, KeysymState> {
  constructor(
    props: KeysymProps & {
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
        mixed={KeysymData.mixed}
        elements={KeysymData.elements}
        attributes={KeysymData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Keysym, {
  path: `*[namespace-uri()='${KeysymData.namespace}' and local-name()='${KeysymData.localName}']`,
});
