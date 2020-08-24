import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BibliomixedData from "../defs/Bibliomixed";

export { default as BibliomixedData } from "../defs/Bibliomixed";

export interface BibliomixedProps {}

export interface BibliomixedState {}

export class Bibliomixed extends Transformer.Template<
  BibliomixedProps,
  BibliomixedState
> {
  constructor(
    props: BibliomixedProps & {
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
        mixed={BibliomixedData.mixed}
        elements={BibliomixedData.elements}
        attributes={BibliomixedData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Bibliomixed, {
  path: `*[namespace-uri()='${BibliomixedData.namespace}' and local-name()='${BibliomixedData.localName}']`,
});
