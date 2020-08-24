import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GlosstermData from "../defs/Glossterm";

export { default as GlosstermData } from "../defs/Glossterm";

export interface GlosstermProps {}

export interface GlosstermState {}

export class Glossterm extends Transformer.Template<
  GlosstermProps,
  GlosstermState
> {
  constructor(
    props: GlosstermProps & {
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
        mixed={GlosstermData.mixed}
        elements={GlosstermData.elements}
        attributes={GlosstermData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Glossterm, {
  path: `*[namespace-uri()='${GlosstermData.namespace}' and local-name()='${GlosstermData.localName}']`,
});
