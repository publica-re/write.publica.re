import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CautionData from "../defs/Caution";

export { default as CautionData } from "../defs/Caution";

export interface CautionProps {}

export interface CautionState {}

export class Caution extends Transformer.Template<CautionProps, CautionState> {
  constructor(
    props: CautionProps & {
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
        mixed={CautionData.mixed}
        elements={CautionData.elements}
        attributes={CautionData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Caution, {
  path: `*[namespace-uri()='${CautionData.namespace}' and local-name()='${CautionData.localName}']`,
});
