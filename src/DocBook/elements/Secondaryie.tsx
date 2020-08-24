import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SecondaryieData from "../defs/Secondaryie";

export { default as SecondaryieData } from "../defs/Secondaryie";

export interface SecondaryieProps {}

export interface SecondaryieState {}

export class Secondaryie extends Transformer.Template<
  SecondaryieProps,
  SecondaryieState
> {
  constructor(
    props: SecondaryieProps & {
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
        mixed={SecondaryieData.mixed}
        elements={SecondaryieData.elements}
        attributes={SecondaryieData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Secondaryie, {
  path: `*[namespace-uri()='${SecondaryieData.namespace}' and local-name()='${SecondaryieData.localName}']`,
});
