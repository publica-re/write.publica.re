import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AbbrevData from "../defs/Abbrev";

export { default as AbbrevData } from "../defs/Abbrev";

export interface AbbrevProps {}

export interface AbbrevState {}

export class Abbrev extends Transformer.Template<AbbrevProps, AbbrevState> {
  constructor(
    props: AbbrevProps & {
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
        mixed={AbbrevData.mixed}
        elements={AbbrevData.elements}
        attributes={AbbrevData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Abbrev, {
  path: `*[namespace-uri()='${AbbrevData.namespace}' and local-name()='${AbbrevData.localName}']`,
});
