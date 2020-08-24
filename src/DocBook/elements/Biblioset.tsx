import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BibliosetData from "../defs/Biblioset";

export { default as BibliosetData } from "../defs/Biblioset";

export interface BibliosetProps {}

export interface BibliosetState {}

export class Biblioset extends Transformer.Template<
  BibliosetProps,
  BibliosetState
> {
  constructor(
    props: BibliosetProps & {
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
        mixed={BibliosetData.mixed}
        elements={BibliosetData.elements}
        attributes={BibliosetData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Biblioset, {
  path: `*[namespace-uri()='${BibliosetData.namespace}' and local-name()='${BibliosetData.localName}']`,
});
