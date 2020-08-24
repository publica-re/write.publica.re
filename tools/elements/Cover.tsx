import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CoverData from "../defs/Cover";

export { default as CoverData } from "../defs/Cover";

export interface CoverProps {}

export interface CoverState {}

export class Cover extends Transformer.Template<CoverProps, CoverState> {
  constructor(
    props: CoverProps & {
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
        mixed={CoverData.mixed}
        elements={CoverData.elements}
        attributes={CoverData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Cover, {
  path: `*[namespace-uri()='${CoverData.namespace}' and local-name()='${CoverData.localName}']`,
});
