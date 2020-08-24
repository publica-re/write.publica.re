import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PobData from "../defs/Pob";

export { default as PobData } from "../defs/Pob";

export interface PobProps {}

export interface PobState {}

export class Pob extends Transformer.Template<PobProps, PobState> {
  constructor(
    props: PobProps & {
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
        mixed={PobData.mixed}
        elements={PobData.elements}
        attributes={PobData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Pob, {
  path: `*[namespace-uri()='${PobData.namespace}' and local-name()='${PobData.localName}']`,
});
