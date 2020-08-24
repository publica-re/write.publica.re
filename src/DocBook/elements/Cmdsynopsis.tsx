import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CmdsynopsisData from "../defs/Cmdsynopsis";

export { default as CmdsynopsisData } from "../defs/Cmdsynopsis";

export interface CmdsynopsisProps {}

export interface CmdsynopsisState {}

export class Cmdsynopsis extends Transformer.Template<
  CmdsynopsisProps,
  CmdsynopsisState
> {
  constructor(
    props: CmdsynopsisProps & {
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
        mixed={CmdsynopsisData.mixed}
        elements={CmdsynopsisData.elements}
        attributes={CmdsynopsisData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Cmdsynopsis, {
  path: `*[namespace-uri()='${CmdsynopsisData.namespace}' and local-name()='${CmdsynopsisData.localName}']`,
});
