import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AttributionData from "../defs/Attribution";

export { default as AttributionData } from "../defs/Attribution";

export interface AttributionProps {}

export interface AttributionState {}

export class Attribution extends Transformer.Template<
  AttributionProps,
  AttributionState
> {
  constructor(
    props: AttributionProps & {
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
        mixed={AttributionData.mixed}
        elements={AttributionData.elements}
        attributes={AttributionData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Attribution, {
  path: `*[namespace-uri()='${AttributionData.namespace}' and local-name()='${AttributionData.localName}']`,
});
