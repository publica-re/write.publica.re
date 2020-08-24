import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MsginfoData from "../defs/Msginfo";

export { default as MsginfoData } from "../defs/Msginfo";

export interface MsginfoProps {}

export interface MsginfoState {}

export class Msginfo extends Transformer.Template<MsginfoProps, MsginfoState> {
  constructor(
    props: MsginfoProps & {
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
        mixed={MsginfoData.mixed}
        elements={MsginfoData.elements}
        attributes={MsginfoData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Msginfo, {
  path: `*[namespace-uri()='${MsginfoData.namespace}' and local-name()='${MsginfoData.localName}']`,
});
