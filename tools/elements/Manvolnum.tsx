import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ManvolnumData from "../defs/Manvolnum";

export { default as ManvolnumData } from "../defs/Manvolnum";

export interface ManvolnumProps {}

export interface ManvolnumState {}

export class Manvolnum extends Transformer.Template<
  ManvolnumProps,
  ManvolnumState
> {
  constructor(
    props: ManvolnumProps & {
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
        mixed={ManvolnumData.mixed}
        elements={ManvolnumData.elements}
        attributes={ManvolnumData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Manvolnum, {
  path: `*[namespace-uri()='${ManvolnumData.namespace}' and local-name()='${ManvolnumData.localName}']`,
});
