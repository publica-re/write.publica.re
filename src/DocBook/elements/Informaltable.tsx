import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import InformaltableData from "../defs/Informaltable";

export { default as InformaltableData } from "../defs/Informaltable";

export interface InformaltableProps {}

export interface InformaltableState {}

export class Informaltable extends Transformer.Template<
  InformaltableProps,
  InformaltableState
> {
  constructor(
    props: InformaltableProps & {
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
        mixed={InformaltableData.mixed}
        elements={InformaltableData.elements}
        attributes={InformaltableData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Informaltable, {
  path: `*[namespace-uri()='${InformaltableData.namespace}' and local-name()='${InformaltableData.localName}']`,
});
