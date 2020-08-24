import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ArtpagenumsData from "../defs/Artpagenums";

export { default as ArtpagenumsData } from "../defs/Artpagenums";

export interface ArtpagenumsProps {}

export interface ArtpagenumsState {}

export class Artpagenums extends Transformer.Template<
  ArtpagenumsProps,
  ArtpagenumsState
> {
  constructor(
    props: ArtpagenumsProps & {
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
        mixed={ArtpagenumsData.mixed}
        elements={ArtpagenumsData.elements}
        attributes={ArtpagenumsData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Artpagenums, {
  path: `*[namespace-uri()='${ArtpagenumsData.namespace}' and local-name()='${ArtpagenumsData.localName}']`,
});
