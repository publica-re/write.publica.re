import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import StepalternativesData from "../defs/Stepalternatives";

export { default as StepalternativesData } from "../defs/Stepalternatives";

export interface StepalternativesProps {}

export interface StepalternativesState {}

export class Stepalternatives extends Transformer.Template<
  StepalternativesProps,
  StepalternativesState
> {
  constructor(
    props: StepalternativesProps & {
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
        mixed={StepalternativesData.mixed}
        elements={StepalternativesData.elements}
        attributes={StepalternativesData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Stepalternatives, {
  path: `*[namespace-uri()='${StepalternativesData.namespace}' and local-name()='${StepalternativesData.localName}']`,
});
