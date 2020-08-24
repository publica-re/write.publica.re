import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RefmiscinfoData from "../defs/Refmiscinfo";

export { default as RefmiscinfoData } from "../defs/Refmiscinfo";

export interface RefmiscinfoProps {}

export interface RefmiscinfoState {}

export class Refmiscinfo extends Transformer.Template<
  RefmiscinfoProps,
  RefmiscinfoState
> {
  constructor(
    props: RefmiscinfoProps & {
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
        mixed={RefmiscinfoData.mixed}
        elements={RefmiscinfoData.elements}
        attributes={RefmiscinfoData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Refmiscinfo, {
  path: `*[namespace-uri()='${RefmiscinfoData.namespace}' and local-name()='${RefmiscinfoData.localName}']`,
});
