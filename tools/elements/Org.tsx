import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import OrgData from "../defs/Org";

export { default as OrgData } from "../defs/Org";

export interface OrgProps {}

export interface OrgState {}

export class Org extends Transformer.Template<OrgProps, OrgState> {
  constructor(
    props: OrgProps & {
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
        mixed={OrgData.mixed}
        elements={OrgData.elements}
        attributes={OrgData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Org, {
  path: `*[namespace-uri()='${OrgData.namespace}' and local-name()='${OrgData.localName}']`,
});
