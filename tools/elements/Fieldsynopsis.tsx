import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FieldsynopsisData from "../defs/Fieldsynopsis";

export { default as FieldsynopsisData } from "../defs/Fieldsynopsis";

export interface FieldsynopsisProps {}

export interface FieldsynopsisState {}

export class Fieldsynopsis extends Transformer.Template<
  FieldsynopsisProps,
  FieldsynopsisState
> {
  constructor(
    props: FieldsynopsisProps & {
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
        mixed={FieldsynopsisData.mixed}
        elements={FieldsynopsisData.elements}
        attributes={FieldsynopsisData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Fieldsynopsis, {
  path: `*[namespace-uri()='${FieldsynopsisData.namespace}' and local-name()='${FieldsynopsisData.localName}']`,
});
