import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import EditionData from "../defs/Edition";

export { default as EditionData } from "../defs/Edition";

export interface EditionProps {}

export interface EditionState {}

export class Edition extends Transformer.Template<EditionProps, EditionState> {
  constructor(
    props: EditionProps & {
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
        mixed={EditionData.mixed}
        elements={EditionData.elements}
        attributes={EditionData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Edition, {
  path: `*[namespace-uri()='${EditionData.namespace}' and local-name()='${EditionData.localName}']`,
});
