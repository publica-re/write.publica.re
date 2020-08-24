import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TypeData from "../defs/Type";

export { default as TypeData } from "../defs/Type";

export interface TypeProps {}

export interface TypeState {}

export class Type extends Transformer.Template<TypeProps, TypeState> {
  constructor(
    props: TypeProps & {
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
        mixed={TypeData.mixed}
        elements={TypeData.elements}
        attributes={TypeData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Type, {
  path: `*[namespace-uri()='${TypeData.namespace}' and local-name()='${TypeData.localName}']`,
});
