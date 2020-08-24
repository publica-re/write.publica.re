import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AuthorData from "../defs/Author";

export { default as AuthorData } from "../defs/Author";

export interface AuthorProps {}

export interface AuthorState {}

export class Author extends Transformer.Template<AuthorProps, AuthorState> {
  constructor(
    props: AuthorProps & {
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
        mixed={AuthorData.mixed}
        elements={AuthorData.elements}
        attributes={AuthorData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Author, {
  path: `*[namespace-uri()='${AuthorData.namespace}' and local-name()='${AuthorData.localName}']`,
});
