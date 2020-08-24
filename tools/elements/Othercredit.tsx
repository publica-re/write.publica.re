import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import OthercreditData from "../defs/Othercredit";

export { default as OthercreditData } from "../defs/Othercredit";

export interface OthercreditProps {}

export interface OthercreditState {}

export class Othercredit extends Transformer.Template<
  OthercreditProps,
  OthercreditState
> {
  constructor(
    props: OthercreditProps & {
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
        mixed={OthercreditData.mixed}
        elements={OthercreditData.elements}
        attributes={OthercreditData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Othercredit, {
  path: `*[namespace-uri()='${OthercreditData.namespace}' and local-name()='${OthercreditData.localName}']`,
});
