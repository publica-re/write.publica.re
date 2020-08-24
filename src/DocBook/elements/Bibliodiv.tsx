import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BibliodivData from "../defs/Bibliodiv";

export { default as BibliodivData } from "../defs/Bibliodiv";

export interface BibliodivProps {}

export interface BibliodivState {}

export class Bibliodiv extends Transformer.Template<
  BibliodivProps,
  BibliodivState
> {
  constructor(
    props: BibliodivProps & {
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
        mixed={BibliodivData.mixed}
        elements={BibliodivData.elements}
        attributes={BibliodivData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Bibliodiv, {
  path: `*[namespace-uri()='${BibliodivData.namespace}' and local-name()='${BibliodivData.localName}']`,
});
