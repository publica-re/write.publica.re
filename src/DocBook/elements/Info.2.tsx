import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import InfoData from "../defs/Info.2";

export { default as InfoData } from "../defs/Info.2";

export interface InfoProps {}

export interface InfoState {}

export class Info extends Transformer.Template<InfoProps, InfoState> {
  constructor(
    props: InfoProps & {
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
        mixed={InfoData.mixed}
        elements={InfoData.elements}
        attributes={InfoData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Info, {
  path: `*[namespace-uri()='${InfoData.namespace}' and local-name()='${InfoData.localName}']`,
});
