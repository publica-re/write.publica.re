import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ComputeroutputData from "../defs/Computeroutput";

export { default as ComputeroutputData } from "../defs/Computeroutput";

export interface ComputeroutputProps {}

export interface ComputeroutputState {}

export class Computeroutput extends Transformer.Template<
  ComputeroutputProps,
  ComputeroutputState
> {
  constructor(
    props: ComputeroutputProps & {
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
        mixed={ComputeroutputData.mixed}
        elements={ComputeroutputData.elements}
        attributes={ComputeroutputData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Computeroutput, {
  path: `*[namespace-uri()='${ComputeroutputData.namespace}' and local-name()='${ComputeroutputData.localName}']`,
});
