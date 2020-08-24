import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import WarningData from "../defs/Warning";

export { default as WarningData } from "../defs/Warning";

export interface WarningProps {}

export interface WarningState {}

export class Warning extends Transformer.Template<WarningProps, WarningState> {
  constructor(
    props: WarningProps & {
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
        mixed={WarningData.mixed}
        elements={WarningData.elements}
        attributes={WarningData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Warning, {
  path: `*[namespace-uri()='${WarningData.namespace}' and local-name()='${WarningData.localName}']`,
});
