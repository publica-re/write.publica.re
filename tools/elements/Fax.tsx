import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FaxData from "../defs/Fax";

export { default as FaxData } from "../defs/Fax";

export interface FaxProps {}

export interface FaxState {}

export class Fax extends Transformer.Template<FaxProps, FaxState> {
  constructor(
    props: FaxProps & {
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
        mixed={FaxData.mixed}
        elements={FaxData.elements}
        attributes={FaxData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Fax, {
  path: `*[namespace-uri()='${FaxData.namespace}' and local-name()='${FaxData.localName}']`,
});
