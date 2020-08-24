import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RefsectionData from "../defs/Refsection";

export { default as RefsectionData } from "../defs/Refsection";

export interface RefsectionProps {}

export interface RefsectionState {}

export class Refsection extends Transformer.Template<
  RefsectionProps,
  RefsectionState
> {
  constructor(
    props: RefsectionProps & {
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
        mixed={RefsectionData.mixed}
        elements={RefsectionData.elements}
        attributes={RefsectionData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Refsection, {
  path: `*[namespace-uri()='${RefsectionData.namespace}' and local-name()='${RefsectionData.localName}']`,
});
