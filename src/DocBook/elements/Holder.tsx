import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import HolderData from "../defs/Holder";

export { default as HolderData } from "../defs/Holder";

export interface HolderProps {}

export interface HolderState {}

export class Holder extends Transformer.Template<HolderProps, HolderState> {
  constructor(
    props: HolderProps & {
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
        mixed={HolderData.mixed}
        elements={HolderData.elements}
        attributes={HolderData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Holder, {
  path: `*[namespace-uri()='${HolderData.namespace}' and local-name()='${HolderData.localName}']`,
});
