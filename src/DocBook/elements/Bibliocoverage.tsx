import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BibliocoverageData from "../defs/Bibliocoverage";

export { default as BibliocoverageData } from "../defs/Bibliocoverage";

export interface BibliocoverageProps {}

export interface BibliocoverageState {}

export class Bibliocoverage extends Transformer.Template<
  BibliocoverageProps,
  BibliocoverageState
> {
  constructor(
    props: BibliocoverageProps & {
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
        mixed={BibliocoverageData.mixed}
        elements={BibliocoverageData.elements}
        attributes={BibliocoverageData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Bibliocoverage, {
  path: `*[namespace-uri()='${BibliocoverageData.namespace}' and local-name()='${BibliocoverageData.localName}']`,
});
