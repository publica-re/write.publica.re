import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RefdescriptorData from "../defs/Refdescriptor";

export { default as RefdescriptorData } from "../defs/Refdescriptor";

export interface RefdescriptorProps {}

export interface RefdescriptorState {}

export class Refdescriptor extends Transformer.Template<
  RefdescriptorProps,
  RefdescriptorState
> {
  constructor(
    props: RefdescriptorProps & {
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
        mixed={RefdescriptorData.mixed}
        elements={RefdescriptorData.elements}
        attributes={RefdescriptorData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Refdescriptor, {
  path: `*[namespace-uri()='${RefdescriptorData.namespace}' and local-name()='${RefdescriptorData.localName}']`,
});
