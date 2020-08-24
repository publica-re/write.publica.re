import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BibliomiscData from "../defs/Bibliomisc";

export { default as BibliomiscData } from "../defs/Bibliomisc";

export interface BibliomiscProps {}

export interface BibliomiscState {}

export class Bibliomisc extends Transformer.Template<
  BibliomiscProps,
  BibliomiscState
> {
  constructor(
    props: BibliomiscProps & {
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
        mixed={BibliomiscData.mixed}
        elements={BibliomiscData.elements}
        attributes={BibliomiscData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Bibliomisc, {
  path: `*[namespace-uri()='${BibliomiscData.namespace}' and local-name()='${BibliomiscData.localName}']`,
});
