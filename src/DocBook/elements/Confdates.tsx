import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ConfdatesData from "../defs/Confdates";

export { default as ConfdatesData } from "../defs/Confdates";

export interface ConfdatesProps {}

export interface ConfdatesState {}

export class Confdates extends Transformer.Template<
  ConfdatesProps,
  ConfdatesState
> {
  constructor(
    props: ConfdatesProps & {
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
        mixed={ConfdatesData.mixed}
        elements={ConfdatesData.elements}
        attributes={ConfdatesData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Confdates, {
  path: `*[namespace-uri()='${ConfdatesData.namespace}' and local-name()='${ConfdatesData.localName}']`,
});
