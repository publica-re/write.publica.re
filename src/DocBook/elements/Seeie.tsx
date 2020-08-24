import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SeeieData from "../defs/Seeie";

export { default as SeeieData } from "../defs/Seeie";

export interface SeeieProps {}

export interface SeeieState {}

export class Seeie extends Transformer.Template<SeeieProps, SeeieState> {
  constructor(
    props: SeeieProps & {
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
        mixed={SeeieData.mixed}
        elements={SeeieData.elements}
        attributes={SeeieData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Seeie, {
  path: `*[namespace-uri()='${SeeieData.namespace}' and local-name()='${SeeieData.localName}']`,
});
