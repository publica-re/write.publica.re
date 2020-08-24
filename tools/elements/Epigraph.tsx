import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import EpigraphData from "../defs/Epigraph";

export { default as EpigraphData } from "../defs/Epigraph";

export interface EpigraphProps {}

export interface EpigraphState {}

export class Epigraph extends Transformer.Template<
  EpigraphProps,
  EpigraphState
> {
  constructor(
    props: EpigraphProps & {
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
        mixed={EpigraphData.mixed}
        elements={EpigraphData.elements}
        attributes={EpigraphData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Epigraph, {
  path: `*[namespace-uri()='${EpigraphData.namespace}' and local-name()='${EpigraphData.localName}']`,
});
