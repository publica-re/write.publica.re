import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SystemitemData from "../defs/Systemitem";

export { default as SystemitemData } from "../defs/Systemitem";

export interface SystemitemProps {}

export interface SystemitemState {}

export class Systemitem extends Transformer.Template<
  SystemitemProps,
  SystemitemState
> {
  constructor(
    props: SystemitemProps & {
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
        mixed={SystemitemData.mixed}
        elements={SystemitemData.elements}
        attributes={SystemitemData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Systemitem, {
  path: `*[namespace-uri()='${SystemitemData.namespace}' and local-name()='${SystemitemData.localName}']`,
});
