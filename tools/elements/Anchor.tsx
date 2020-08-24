import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AnchorData from "../defs/Anchor";

export { default as AnchorData } from "../defs/Anchor";

export interface AnchorProps {}

export interface AnchorState {}

export class Anchor extends Transformer.Template<AnchorProps, AnchorState> {
  constructor(
    props: AnchorProps & {
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
        mixed={AnchorData.mixed}
        elements={AnchorData.elements}
        attributes={AnchorData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Anchor, {
  path: `*[namespace-uri()='${AnchorData.namespace}' and local-name()='${AnchorData.localName}']`,
});
