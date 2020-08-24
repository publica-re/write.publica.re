import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SubjectData from "../defs/Subject";

export { default as SubjectData } from "../defs/Subject";

export interface SubjectProps {}

export interface SubjectState {}

export class Subject extends Transformer.Template<SubjectProps, SubjectState> {
  constructor(
    props: SubjectProps & {
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
        mixed={SubjectData.mixed}
        elements={SubjectData.elements}
        attributes={SubjectData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Subject, {
  path: `*[namespace-uri()='${SubjectData.namespace}' and local-name()='${SubjectData.localName}']`,
});
