import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SeglistitemData from "../defs/Seglistitem";

export { default as SeglistitemData } from "../defs/Seglistitem";

export interface SeglistitemProps {}

export interface SeglistitemState {}

export class Seglistitem extends Transformer.Template<
  SeglistitemProps,
  SeglistitemState
> {
  constructor(
    props: SeglistitemProps & {
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
        mixed={SeglistitemData.mixed}
        elements={SeglistitemData.elements}
        attributes={SeglistitemData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Seglistitem, {
  path: `*[namespace-uri()='${SeglistitemData.namespace}' and local-name()='${SeglistitemData.localName}']`,
});
