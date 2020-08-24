import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ColData from "../defs/Col";

export { default as ColData } from "../defs/Col";

export interface ColProps {}

export interface ColState {}

export class Col extends Transformer.Template<ColProps, ColState> {
  constructor(
    props: ColProps & {
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
        mixed={ColData.mixed}
        elements={ColData.elements}
        attributes={ColData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Col, {
  path: `*[namespace-uri()='${ColData.namespace}' and local-name()='${ColData.localName}']`,
});
