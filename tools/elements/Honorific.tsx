import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import HonorificData from "../defs/Honorific";

export { default as HonorificData } from "../defs/Honorific";

export interface HonorificProps {}

export interface HonorificState {}

export class Honorific extends Transformer.Template<
  HonorificProps,
  HonorificState
> {
  constructor(
    props: HonorificProps & {
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
        mixed={HonorificData.mixed}
        elements={HonorificData.elements}
        attributes={HonorificData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Honorific, {
  path: `*[namespace-uri()='${HonorificData.namespace}' and local-name()='${HonorificData.localName}']`,
});
