import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CitetitleData from "../defs/Citetitle";

export { default as CitetitleData } from "../defs/Citetitle";

export interface CitetitleProps {}

export interface CitetitleState {}

export class Citetitle extends Transformer.Template<
  CitetitleProps,
  CitetitleState
> {
  constructor(
    props: CitetitleProps & {
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
        mixed={CitetitleData.mixed}
        elements={CitetitleData.elements}
        attributes={CitetitleData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Citetitle, {
  path: `*[namespace-uri()='${CitetitleData.namespace}' and local-name()='${CitetitleData.localName}']`,
});
