import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SubjecttermData from "../defs/Subjectterm";

export { default as SubjecttermData } from "../defs/Subjectterm";

export interface SubjecttermProps {}

export interface SubjecttermState {}

export class Subjectterm extends Transformer.Template<
  SubjecttermProps,
  SubjecttermState
> {
  constructor(
    props: SubjecttermProps & {
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
        mixed={SubjecttermData.mixed}
        elements={SubjecttermData.elements}
        attributes={SubjecttermData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Subjectterm, {
  path: `*[namespace-uri()='${SubjecttermData.namespace}' and local-name()='${SubjecttermData.localName}']`,
});
