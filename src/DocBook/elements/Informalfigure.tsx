import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import InformalfigureData from "../defs/Informalfigure";

export { default as InformalfigureData } from "../defs/Informalfigure";

export interface InformalfigureProps {}

export interface InformalfigureState {}

export class Informalfigure extends Transformer.Template<
  InformalfigureProps,
  InformalfigureState
> {
  constructor(
    props: InformalfigureProps & {
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
        mixed={InformalfigureData.mixed}
        elements={InformalfigureData.elements}
        attributes={InformalfigureData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Informalfigure, {
  path: `*[namespace-uri()='${InformalfigureData.namespace}' and local-name()='${InformalfigureData.localName}']`,
});
