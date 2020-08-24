import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import VarlistentryData from "../defs/Varlistentry";

export { default as VarlistentryData } from "../defs/Varlistentry";

export interface VarlistentryProps {}

export interface VarlistentryState {}

export class Varlistentry extends Transformer.Template<
  VarlistentryProps,
  VarlistentryState
> {
  constructor(
    props: VarlistentryProps & {
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
        mixed={VarlistentryData.mixed}
        elements={VarlistentryData.elements}
        attributes={VarlistentryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Varlistentry, {
  path: `*[namespace-uri()='${VarlistentryData.namespace}' and local-name()='${VarlistentryData.localName}']`,
});
