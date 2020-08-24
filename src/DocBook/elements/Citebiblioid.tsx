import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CitebiblioidData from "../defs/Citebiblioid";

export { default as CitebiblioidData } from "../defs/Citebiblioid";

export interface CitebiblioidProps {}

export interface CitebiblioidState {}

export class Citebiblioid extends Transformer.Template<
  CitebiblioidProps,
  CitebiblioidState
> {
  constructor(
    props: CitebiblioidProps & {
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
        mixed={CitebiblioidData.mixed}
        elements={CitebiblioidData.elements}
        attributes={CitebiblioidData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Citebiblioid, {
  path: `*[namespace-uri()='${CitebiblioidData.namespace}' and local-name()='${CitebiblioidData.localName}']`,
});
