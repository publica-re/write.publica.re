import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SubstepsData from "../defs/Substeps";

export { default as SubstepsData } from "../defs/Substeps";

export interface SubstepsProps {}

export interface SubstepsState {}

export class Substeps extends Transformer.Template<
  SubstepsProps,
  SubstepsState
> {
  constructor(
    props: SubstepsProps & {
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
        mixed={SubstepsData.mixed}
        elements={SubstepsData.elements}
        attributes={SubstepsData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Substeps, {
  path: `*[namespace-uri()='${SubstepsData.namespace}' and local-name()='${SubstepsData.localName}']`,
});
