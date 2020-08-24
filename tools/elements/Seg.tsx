import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SegData from "../defs/Seg";

export { default as SegData } from "../defs/Seg";

export interface SegProps {}

export interface SegState {}

export class Seg extends Transformer.Template<SegProps, SegState> {
  constructor(
    props: SegProps & {
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
        mixed={SegData.mixed}
        elements={SegData.elements}
        attributes={SegData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Seg, {
  path: `*[namespace-uri()='${SegData.namespace}' and local-name()='${SegData.localName}']`,
});
