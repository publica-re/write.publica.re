import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import VolumenumData from "../defs/Volumenum";

export { default as VolumenumData } from "../defs/Volumenum";

export interface VolumenumProps {}

export interface VolumenumState {}

export class Volumenum extends Transformer.Template<
  VolumenumProps,
  VolumenumState
> {
  constructor(
    props: VolumenumProps & {
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
        mixed={VolumenumData.mixed}
        elements={VolumenumData.elements}
        attributes={VolumenumData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Volumenum, {
  path: `*[namespace-uri()='${VolumenumData.namespace}' and local-name()='${VolumenumData.localName}']`,
});
