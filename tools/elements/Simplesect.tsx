import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SimplesectData from "../defs/Simplesect";

export { default as SimplesectData } from "../defs/Simplesect";

export interface SimplesectProps {}

export interface SimplesectState {}

export class Simplesect extends Transformer.Template<
  SimplesectProps,
  SimplesectState
> {
  constructor(
    props: SimplesectProps & {
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
        mixed={SimplesectData.mixed}
        elements={SimplesectData.elements}
        attributes={SimplesectData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Simplesect, {
  path: `*[namespace-uri()='${SimplesectData.namespace}' and local-name()='${SimplesectData.localName}']`,
});
