import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SectionData from "../defs/Section";

export { default as SectionData } from "../defs/Section";

export interface SectionProps {}

export interface SectionState {}

export class Section extends Transformer.Template<SectionProps, SectionState> {
  constructor(
    props: SectionProps & {
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
        mixed={SectionData.mixed}
        elements={SectionData.elements}
        attributes={SectionData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Section, {
  path: `*[namespace-uri()='${SectionData.namespace}' and local-name()='${SectionData.localName}']`,
});
