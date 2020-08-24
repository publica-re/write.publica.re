import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PrimaryData from "../defs/Primary";

export { default as PrimaryData } from "../defs/Primary";

export interface PrimaryProps {}

export interface PrimaryState {}

export class Primary extends Transformer.Template<PrimaryProps, PrimaryState> {
  constructor(
    props: PrimaryProps & {
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
        mixed={PrimaryData.mixed}
        elements={PrimaryData.elements}
        attributes={PrimaryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Primary, {
  path: `*[namespace-uri()='${PrimaryData.namespace}' and local-name()='${PrimaryData.localName}']`,
});
