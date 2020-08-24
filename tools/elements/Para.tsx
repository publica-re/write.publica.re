import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ParaData from "../defs/Para";

export { default as ParaData } from "../defs/Para";

export interface ParaProps {}

export interface ParaState {}

export class Para extends Transformer.Template<ParaProps, ParaState> {
  constructor(
    props: ParaProps & {
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
        mixed={ParaData.mixed}
        elements={ParaData.elements}
        attributes={ParaData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Para, {
  path: `*[namespace-uri()='${ParaData.namespace}' and local-name()='${ParaData.localName}']`,
});
