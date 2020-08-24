import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import OrgnameData from "../defs/Orgname";

export { default as OrgnameData } from "../defs/Orgname";

export interface OrgnameProps {}

export interface OrgnameState {}

export class Orgname extends Transformer.Template<OrgnameProps, OrgnameState> {
  constructor(
    props: OrgnameProps & {
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
        mixed={OrgnameData.mixed}
        elements={OrgnameData.elements}
        attributes={OrgnameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Orgname, {
  path: `*[namespace-uri()='${OrgnameData.namespace}' and local-name()='${OrgnameData.localName}']`,
});
