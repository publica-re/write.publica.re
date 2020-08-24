import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import OrgdivData from "../defs/Orgdiv";

export { default as OrgdivData } from "../defs/Orgdiv";

export interface OrgdivProps {}

export interface OrgdivState {}

export class Orgdiv extends Transformer.Template<OrgdivProps, OrgdivState> {
  constructor(
    props: OrgdivProps & {
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
        mixed={OrgdivData.mixed}
        elements={OrgdivData.elements}
        attributes={OrgdivData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Orgdiv, {
  path: `*[namespace-uri()='${OrgdivData.namespace}' and local-name()='${OrgdivData.localName}']`,
});
