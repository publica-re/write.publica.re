import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MethodnameData from "../defs/Methodname";

export { default as MethodnameData } from "../defs/Methodname";

export interface MethodnameProps {}

export interface MethodnameState {}

export class Methodname extends Transformer.Template<
  MethodnameProps,
  MethodnameState
> {
  constructor(
    props: MethodnameProps & {
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
        mixed={MethodnameData.mixed}
        elements={MethodnameData.elements}
        attributes={MethodnameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Methodname, {
  path: `*[namespace-uri()='${MethodnameData.namespace}' and local-name()='${MethodnameData.localName}']`,
});
