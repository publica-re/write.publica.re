import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import QandasetData from "../defs/Qandaset";

export { default as QandasetData } from "../defs/Qandaset";

export interface QandasetProps {}

export interface QandasetState {}

export class Qandaset extends Transformer.Template<
  QandasetProps,
  QandasetState
> {
  constructor(
    props: QandasetProps & {
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
        mixed={QandasetData.mixed}
        elements={QandasetData.elements}
        attributes={QandasetData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Qandaset, {
  path: `*[namespace-uri()='${QandasetData.namespace}' and local-name()='${QandasetData.localName}']`,
});
