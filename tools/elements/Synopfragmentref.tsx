import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SynopfragmentrefData from "../defs/Synopfragmentref";

export { default as SynopfragmentrefData } from "../defs/Synopfragmentref";

export interface SynopfragmentrefProps {}

export interface SynopfragmentrefState {}

export class Synopfragmentref extends Transformer.Template<
  SynopfragmentrefProps,
  SynopfragmentrefState
> {
  constructor(
    props: SynopfragmentrefProps & {
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
        mixed={SynopfragmentrefData.mixed}
        elements={SynopfragmentrefData.elements}
        attributes={SynopfragmentrefData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Synopfragmentref, {
  path: `*[namespace-uri()='${SynopfragmentrefData.namespace}' and local-name()='${SynopfragmentrefData.localName}']`,
});
