import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BiblioidData from "../defs/Biblioid";

export { default as BiblioidData } from "../defs/Biblioid";

export interface BiblioidProps {}

export interface BiblioidState {}

export class Biblioid extends Transformer.Template<
  BiblioidProps,
  BiblioidState
> {
  constructor(
    props: BiblioidProps & {
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
        mixed={BiblioidData.mixed}
        elements={BiblioidData.elements}
        attributes={BiblioidData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Biblioid, {
  path: `*[namespace-uri()='${BiblioidData.namespace}' and local-name()='${BiblioidData.localName}']`,
});
