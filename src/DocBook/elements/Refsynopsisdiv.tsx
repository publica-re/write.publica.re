import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RefsynopsisdivData from "../defs/Refsynopsisdiv";

export { default as RefsynopsisdivData } from "../defs/Refsynopsisdiv";

export interface RefsynopsisdivProps {}

export interface RefsynopsisdivState {}

export class Refsynopsisdiv extends Transformer.Template<
  RefsynopsisdivProps,
  RefsynopsisdivState
> {
  constructor(
    props: RefsynopsisdivProps & {
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
        mixed={RefsynopsisdivData.mixed}
        elements={RefsynopsisdivData.elements}
        attributes={RefsynopsisdivData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Refsynopsisdiv, {
  path: `*[namespace-uri()='${RefsynopsisdivData.namespace}' and local-name()='${RefsynopsisdivData.localName}']`,
});
