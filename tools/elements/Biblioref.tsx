import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BibliorefData from "../defs/Biblioref";

export { default as BibliorefData } from "../defs/Biblioref";

export interface BibliorefProps {}

export interface BibliorefState {}

export class Biblioref extends Transformer.Template<
  BibliorefProps,
  BibliorefState
> {
  constructor(
    props: BibliorefProps & {
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
        mixed={BibliorefData.mixed}
        elements={BibliorefData.elements}
        attributes={BibliorefData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Biblioref, {
  path: `*[namespace-uri()='${BibliorefData.namespace}' and local-name()='${BibliorefData.localName}']`,
});
