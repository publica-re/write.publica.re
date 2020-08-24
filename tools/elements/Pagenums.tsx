import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PagenumsData from "../defs/Pagenums";

export { default as PagenumsData } from "../defs/Pagenums";

export interface PagenumsProps {}

export interface PagenumsState {}

export class Pagenums extends Transformer.Template<
  PagenumsProps,
  PagenumsState
> {
  constructor(
    props: PagenumsProps & {
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
        mixed={PagenumsData.mixed}
        elements={PagenumsData.elements}
        attributes={PagenumsData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Pagenums, {
  path: `*[namespace-uri()='${PagenumsData.namespace}' and local-name()='${PagenumsData.localName}']`,
});
