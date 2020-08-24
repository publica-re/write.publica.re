import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AccelData from "../defs/Accel";

export { default as AccelData } from "../defs/Accel";

export interface AccelProps {}

export interface AccelState {}

export class Accel extends Transformer.Template<AccelProps, AccelState> {
  constructor(
    props: AccelProps & {
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
        mixed={AccelData.mixed}
        elements={AccelData.elements}
        attributes={AccelData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Accel, {
  path: `*[namespace-uri()='${AccelData.namespace}' and local-name()='${AccelData.localName}']`,
});
