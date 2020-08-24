import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SegtitleData from "../defs/Segtitle";

export { default as SegtitleData } from "../defs/Segtitle";

export interface SegtitleProps {}

export interface SegtitleState {}

export class Segtitle extends Transformer.Template<
  SegtitleProps,
  SegtitleState
> {
  constructor(
    props: SegtitleProps & {
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
        mixed={SegtitleData.mixed}
        elements={SegtitleData.elements}
        attributes={SegtitleData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Segtitle, {
  path: `*[namespace-uri()='${SegtitleData.namespace}' and local-name()='${SegtitleData.localName}']`,
});
