import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ReferenceData from "../defs/Reference";

export { default as ReferenceData } from "../defs/Reference";

export interface ReferenceProps {}

export interface ReferenceState {}

export class Reference extends Transformer.Template<
  ReferenceProps,
  ReferenceState
> {
  constructor(
    props: ReferenceProps & {
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
        mixed={ReferenceData.mixed}
        elements={ReferenceData.elements}
        attributes={ReferenceData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Reference, {
  path: `*[namespace-uri()='${ReferenceData.namespace}' and local-name()='${ReferenceData.localName}']`,
});
