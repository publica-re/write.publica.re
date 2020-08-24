import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import HardwareData from "../defs/Hardware";

export { default as HardwareData } from "../defs/Hardware";

export interface HardwareProps {}

export interface HardwareState {}

export class Hardware extends Transformer.Template<
  HardwareProps,
  HardwareState
> {
  constructor(
    props: HardwareProps & {
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
        mixed={HardwareData.mixed}
        elements={HardwareData.elements}
        attributes={HardwareData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Hardware, {
  path: `*[namespace-uri()='${HardwareData.namespace}' and local-name()='${HardwareData.localName}']`,
});
