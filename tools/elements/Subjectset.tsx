import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SubjectsetData from "../defs/Subjectset";

export { default as SubjectsetData } from "../defs/Subjectset";

export interface SubjectsetProps {}

export interface SubjectsetState {}

export class Subjectset extends Transformer.Template<
  SubjectsetProps,
  SubjectsetState
> {
  constructor(
    props: SubjectsetProps & {
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
        mixed={SubjectsetData.mixed}
        elements={SubjectsetData.elements}
        attributes={SubjectsetData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Subjectset, {
  path: `*[namespace-uri()='${SubjectsetData.namespace}' and local-name()='${SubjectsetData.localName}']`,
});
