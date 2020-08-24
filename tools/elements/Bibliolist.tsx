import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BibliolistData from "../defs/Bibliolist";

export { default as BibliolistData } from "../defs/Bibliolist";

export interface BibliolistProps {}

export interface BibliolistState {}

export class Bibliolist extends Transformer.Template<
  BibliolistProps,
  BibliolistState
> {
  constructor(
    props: BibliolistProps & {
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
        mixed={BibliolistData.mixed}
        elements={BibliolistData.elements}
        attributes={BibliolistData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Bibliolist, {
  path: `*[namespace-uri()='${BibliolistData.namespace}' and local-name()='${BibliolistData.localName}']`,
});
