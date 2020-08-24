import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BibliomsetData from "../defs/Bibliomset";

export { default as BibliomsetData } from "../defs/Bibliomset";

export interface BibliomsetProps {}

export interface BibliomsetState {}

export class Bibliomset extends Transformer.Template<
  BibliomsetProps,
  BibliomsetState
> {
  constructor(
    props: BibliomsetProps & {
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
        mixed={BibliomsetData.mixed}
        elements={BibliomsetData.elements}
        attributes={BibliomsetData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Bibliomset, {
  path: `*[namespace-uri()='${BibliomsetData.namespace}' and local-name()='${BibliomsetData.localName}']`,
});
