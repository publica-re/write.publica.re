import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AuthorgroupData from "../defs/Authorgroup";

export { default as AuthorgroupData } from "../defs/Authorgroup";

export interface AuthorgroupProps {}

export interface AuthorgroupState {}

export class Authorgroup extends Transformer.Template<
  AuthorgroupProps,
  AuthorgroupState
> {
  constructor(
    props: AuthorgroupProps & {
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
        mixed={AuthorgroupData.mixed}
        elements={AuthorgroupData.elements}
        attributes={AuthorgroupData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Authorgroup, {
  path: `*[namespace-uri()='${AuthorgroupData.namespace}' and local-name()='${AuthorgroupData.localName}']`,
});
