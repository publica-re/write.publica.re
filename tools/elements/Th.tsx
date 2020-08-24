import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ThData from "../defs/Th";

export { default as ThData } from "../defs/Th";

export interface ThProps {}

export interface ThState {}

export class Th extends Transformer.Template<ThProps, ThState> {
  constructor(
    props: ThProps & {
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
        mixed={ThData.mixed}
        elements={ThData.elements}
        attributes={ThData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Th, {
  path: `*[namespace-uri()='${ThData.namespace}' and local-name()='${ThData.localName}']`,
});
