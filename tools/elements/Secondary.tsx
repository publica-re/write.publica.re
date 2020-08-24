import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SecondaryData from "../defs/Secondary";

export { default as SecondaryData } from "../defs/Secondary";

export interface SecondaryProps {}

export interface SecondaryState {}

export class Secondary extends Transformer.Template<
  SecondaryProps,
  SecondaryState
> {
  constructor(
    props: SecondaryProps & {
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
        mixed={SecondaryData.mixed}
        elements={SecondaryData.elements}
        attributes={SecondaryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Secondary, {
  path: `*[namespace-uri()='${SecondaryData.namespace}' and local-name()='${SecondaryData.localName}']`,
});
