import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CopyrightData from "../defs/Copyright";

export { default as CopyrightData } from "../defs/Copyright";

export interface CopyrightProps {}

export interface CopyrightState {}

export class Copyright extends Transformer.Template<
  CopyrightProps,
  CopyrightState
> {
  constructor(
    props: CopyrightProps & {
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
        mixed={CopyrightData.mixed}
        elements={CopyrightData.elements}
        attributes={CopyrightData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Copyright, {
  path: `*[namespace-uri()='${CopyrightData.namespace}' and local-name()='${CopyrightData.localName}']`,
});
