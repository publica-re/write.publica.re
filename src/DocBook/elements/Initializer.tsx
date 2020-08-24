import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import InitializerData from "../defs/Initializer";

export { default as InitializerData } from "../defs/Initializer";

export interface InitializerProps {}

export interface InitializerState {}

export class Initializer extends Transformer.Template<
  InitializerProps,
  InitializerState
> {
  constructor(
    props: InitializerProps & {
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
        mixed={InitializerData.mixed}
        elements={InitializerData.elements}
        attributes={InitializerData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Initializer, {
  path: `*[namespace-uri()='${InitializerData.namespace}' and local-name()='${InitializerData.localName}']`,
});
