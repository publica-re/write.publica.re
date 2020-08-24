import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AltData from "../defs/Alt";

export { default as AltData } from "../defs/Alt";

export interface AltProps {}

export interface AltState {}

export class Alt extends Transformer.Template<AltProps, AltState> {
  constructor(
    props: AltProps & {
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
        mixed={AltData.mixed}
        elements={AltData.elements}
        attributes={AltData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Alt, {
  path: `*[namespace-uri()='${AltData.namespace}' and local-name()='${AltData.localName}']`,
});
