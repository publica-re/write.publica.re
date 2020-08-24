import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ProgramlistingData from "../defs/Programlisting";

export { default as ProgramlistingData } from "../defs/Programlisting";

export interface ProgramlistingProps {}

export interface ProgramlistingState {}

export class Programlisting extends Transformer.Template<
  ProgramlistingProps,
  ProgramlistingState
> {
  constructor(
    props: ProgramlistingProps & {
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
        mixed={ProgramlistingData.mixed}
        elements={ProgramlistingData.elements}
        attributes={ProgramlistingData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Programlisting, {
  path: `*[namespace-uri()='${ProgramlistingData.namespace}' and local-name()='${ProgramlistingData.localName}']`,
});
