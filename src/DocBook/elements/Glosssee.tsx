import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GlossseeData from "../defs/Glosssee";

export { default as GlossseeData } from "../defs/Glosssee";

export interface GlossseeProps {}

export interface GlossseeState {}

export class Glosssee extends Transformer.Template<
  GlossseeProps,
  GlossseeState
> {
  constructor(
    props: GlossseeProps & {
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
        mixed={GlossseeData.mixed}
        elements={GlossseeData.elements}
        attributes={GlossseeData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Glosssee, {
  path: `*[namespace-uri()='${GlossseeData.namespace}' and local-name()='${GlossseeData.localName}']`,
});
