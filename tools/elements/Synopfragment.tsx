import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SynopfragmentData from "../defs/Synopfragment";

export { default as SynopfragmentData } from "../defs/Synopfragment";

export interface SynopfragmentProps {}

export interface SynopfragmentState {}

export class Synopfragment extends Transformer.Template<
  SynopfragmentProps,
  SynopfragmentState
> {
  constructor(
    props: SynopfragmentProps & {
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
        mixed={SynopfragmentData.mixed}
        elements={SynopfragmentData.elements}
        attributes={SynopfragmentData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Synopfragment, {
  path: `*[namespace-uri()='${SynopfragmentData.namespace}' and local-name()='${SynopfragmentData.localName}']`,
});
