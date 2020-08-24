import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import KeycomboData from "../defs/Keycombo";

export { default as KeycomboData } from "../defs/Keycombo";

export interface KeycomboProps {}

export interface KeycomboState {}

export class Keycombo extends Transformer.Template<
  KeycomboProps,
  KeycomboState
> {
  constructor(
    props: KeycomboProps & {
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
        mixed={KeycomboData.mixed}
        elements={KeycomboData.elements}
        attributes={KeycomboData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Keycombo, {
  path: `*[namespace-uri()='${KeycomboData.namespace}' and local-name()='${KeycomboData.localName}']`,
});
