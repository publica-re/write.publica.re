import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CoData from "../defs/Co";

export { default as CoData } from "../defs/Co";

export interface CoProps {}

export interface CoState {}

export class Co extends Transformer.Template<CoProps, CoState> {
  constructor(
    props: CoProps & {
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
        mixed={CoData.mixed}
        elements={CoData.elements}
        attributes={CoData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Co, {
  path: `*[namespace-uri()='${CoData.namespace}' and local-name()='${CoData.localName}']`,
});
