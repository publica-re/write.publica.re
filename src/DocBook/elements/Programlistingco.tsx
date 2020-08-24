import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ProgramlistingcoData from "../defs/Programlistingco";

export { default as ProgramlistingcoData } from "../defs/Programlistingco";

export interface ProgramlistingcoProps {}

export interface ProgramlistingcoState {}

export class Programlistingco extends Transformer.Template<
  ProgramlistingcoProps,
  ProgramlistingcoState
> {
  constructor(
    props: ProgramlistingcoProps & {
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
        mixed={ProgramlistingcoData.mixed}
        elements={ProgramlistingcoData.elements}
        attributes={ProgramlistingcoData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Programlistingco, {
  path: `*[namespace-uri()='${ProgramlistingcoData.namespace}' and local-name()='${ProgramlistingcoData.localName}']`,
});
