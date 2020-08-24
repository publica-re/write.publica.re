import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AuthorinitialsData from "../defs/Authorinitials";

export { default as AuthorinitialsData } from "../defs/Authorinitials";

export interface AuthorinitialsProps {}

export interface AuthorinitialsState {}

export class Authorinitials extends Transformer.Template<
  AuthorinitialsProps,
  AuthorinitialsState
> {
  constructor(
    props: AuthorinitialsProps & {
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
        mixed={AuthorinitialsData.mixed}
        elements={AuthorinitialsData.elements}
        attributes={AuthorinitialsData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Authorinitials, {
  path: `*[namespace-uri()='${AuthorinitialsData.namespace}' and local-name()='${AuthorinitialsData.localName}']`,
});
