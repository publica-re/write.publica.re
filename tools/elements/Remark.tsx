import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RemarkData from "../defs/Remark";

export { default as RemarkData } from "../defs/Remark";

export interface RemarkProps {}

export interface RemarkState {}

export class Remark extends Transformer.Template<RemarkProps, RemarkState> {
  constructor(
    props: RemarkProps & {
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
        mixed={RemarkData.mixed}
        elements={RemarkData.elements}
        attributes={RemarkData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Remark, {
  path: `*[namespace-uri()='${RemarkData.namespace}' and local-name()='${RemarkData.localName}']`,
});
