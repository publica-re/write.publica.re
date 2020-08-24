import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GuilabelData from "../defs/Guilabel";

export { default as GuilabelData } from "../defs/Guilabel";

export interface GuilabelProps {}

export interface GuilabelState {}

export class Guilabel extends Transformer.Template<
  GuilabelProps,
  GuilabelState
> {
  constructor(
    props: GuilabelProps & {
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
        mixed={GuilabelData.mixed}
        elements={GuilabelData.elements}
        attributes={GuilabelData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Guilabel, {
  path: `*[namespace-uri()='${GuilabelData.namespace}' and local-name()='${GuilabelData.localName}']`,
});
