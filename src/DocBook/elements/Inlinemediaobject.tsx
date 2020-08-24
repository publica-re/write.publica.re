import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import InlinemediaobjectData from "../defs/Inlinemediaobject";

export { default as InlinemediaobjectData } from "../defs/Inlinemediaobject";

export interface InlinemediaobjectProps {}

export interface InlinemediaobjectState {}

export class Inlinemediaobject extends Transformer.Template<
  InlinemediaobjectProps,
  InlinemediaobjectState
> {
  constructor(
    props: InlinemediaobjectProps & {
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
        mixed={InlinemediaobjectData.mixed}
        elements={InlinemediaobjectData.elements}
        attributes={InlinemediaobjectData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Inlinemediaobject, {
  path: `*[namespace-uri()='${InlinemediaobjectData.namespace}' and local-name()='${InlinemediaobjectData.localName}']`,
});
