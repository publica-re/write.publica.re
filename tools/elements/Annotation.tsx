import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AnnotationData from "../defs/Annotation";

export { default as AnnotationData } from "../defs/Annotation";

export interface AnnotationProps {}

export interface AnnotationState {}

export class Annotation extends Transformer.Template<
  AnnotationProps,
  AnnotationState
> {
  constructor(
    props: AnnotationProps & {
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
        mixed={AnnotationData.mixed}
        elements={AnnotationData.elements}
        attributes={AnnotationData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Annotation, {
  path: `*[namespace-uri()='${AnnotationData.namespace}' and local-name()='${AnnotationData.localName}']`,
});
