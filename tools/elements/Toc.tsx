import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TocData from "../defs/Toc";

export { default as TocData } from "../defs/Toc";

export interface TocProps {}

export interface TocState {}

export class Toc extends Transformer.Template<TocProps, TocState> {
  constructor(
    props: TocProps & {
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
        mixed={TocData.mixed}
        elements={TocData.elements}
        attributes={TocData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Toc, {
  path: `*[namespace-uri()='${TocData.namespace}' and local-name()='${TocData.localName}']`,
});
