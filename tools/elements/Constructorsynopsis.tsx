import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ConstructorsynopsisData from "../defs/Constructorsynopsis";

export { default as ConstructorsynopsisData } from "../defs/Constructorsynopsis";

export interface ConstructorsynopsisProps {}

export interface ConstructorsynopsisState {}

export class Constructorsynopsis extends Transformer.Template<
  ConstructorsynopsisProps,
  ConstructorsynopsisState
> {
  constructor(
    props: ConstructorsynopsisProps & {
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
        mixed={ConstructorsynopsisData.mixed}
        elements={ConstructorsynopsisData.elements}
        attributes={ConstructorsynopsisData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Constructorsynopsis, {
  path: `*[namespace-uri()='${ConstructorsynopsisData.namespace}' and local-name()='${ConstructorsynopsisData.localName}']`,
});
