import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import LiterallayoutData from "../defs/Literallayout";

export { default as LiterallayoutData } from "../defs/Literallayout";

export interface LiterallayoutProps {}

export interface LiterallayoutState {}

export class Literallayout extends Transformer.Template<
  LiterallayoutProps,
  LiterallayoutState
> {
  constructor(
    props: LiterallayoutProps & {
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
        mixed={LiterallayoutData.mixed}
        elements={LiterallayoutData.elements}
        attributes={LiterallayoutData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Literallayout, {
  path: `*[namespace-uri()='${LiterallayoutData.namespace}' and local-name()='${LiterallayoutData.localName}']`,
});
