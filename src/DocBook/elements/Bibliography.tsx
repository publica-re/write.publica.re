import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BibliographyData from "../defs/Bibliography";

export { default as BibliographyData } from "../defs/Bibliography";

export interface BibliographyProps {}

export interface BibliographyState {}

export class Bibliography extends Transformer.Template<
  BibliographyProps,
  BibliographyState
> {
  constructor(
    props: BibliographyProps & {
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
        mixed={BibliographyData.mixed}
        elements={BibliographyData.elements}
        attributes={BibliographyData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Bibliography, {
  path: `*[namespace-uri()='${BibliographyData.namespace}' and local-name()='${BibliographyData.localName}']`,
});
