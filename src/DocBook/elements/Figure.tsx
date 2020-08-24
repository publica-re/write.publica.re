import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FigureData from "../defs/Figure";

export { default as FigureData } from "../defs/Figure";

export interface FigureProps {}

export interface FigureState {}

export class Figure extends Transformer.Template<FigureProps, FigureState> {
  constructor(
    props: FigureProps & {
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
        mixed={FigureData.mixed}
        elements={FigureData.elements}
        attributes={FigureData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Figure, {
  path: `*[namespace-uri()='${FigureData.namespace}' and local-name()='${FigureData.localName}']`,
});
