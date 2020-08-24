import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ModifierData from "../defs/Modifier";

export { default as ModifierData } from "../defs/Modifier";

export interface ModifierProps {}

export interface ModifierState {}

export class Modifier extends Transformer.Template<
  ModifierProps,
  ModifierState
> {
  constructor(
    props: ModifierProps & {
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
        mixed={ModifierData.mixed}
        elements={ModifierData.elements}
        attributes={ModifierData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Modifier, {
  path: `*[namespace-uri()='${ModifierData.namespace}' and local-name()='${ModifierData.localName}']`,
});
