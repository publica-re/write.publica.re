import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TocdivData from "../defs/Tocdiv";

export { default as TocdivData } from "../defs/Tocdiv";

export interface TocdivProps {}

export interface TocdivState {}

export class Tocdiv extends Transformer.Template<TocdivProps, TocdivState> {
  constructor(
    props: TocdivProps & {
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
        mixed={TocdivData.mixed}
        elements={TocdivData.elements}
        attributes={TocdivData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Tocdiv, {
  path: `*[namespace-uri()='${TocdivData.namespace}' and local-name()='${TocdivData.localName}']`,
});
