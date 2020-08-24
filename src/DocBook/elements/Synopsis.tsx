import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SynopsisData from "../defs/Synopsis";

export { default as SynopsisData } from "../defs/Synopsis";

export interface SynopsisProps {}

export interface SynopsisState {}

export class Synopsis extends Transformer.Template<
  SynopsisProps,
  SynopsisState
> {
  constructor(
    props: SynopsisProps & {
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
        mixed={SynopsisData.mixed}
        elements={SynopsisData.elements}
        attributes={SynopsisData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Synopsis, {
  path: `*[namespace-uri()='${SynopsisData.namespace}' and local-name()='${SynopsisData.localName}']`,
});
