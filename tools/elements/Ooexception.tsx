import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import OoexceptionData from "../defs/Ooexception";

export { default as OoexceptionData } from "../defs/Ooexception";

export interface OoexceptionProps {}

export interface OoexceptionState {}

export class Ooexception extends Transformer.Template<
  OoexceptionProps,
  OoexceptionState
> {
  constructor(
    props: OoexceptionProps & {
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
        mixed={OoexceptionData.mixed}
        elements={OoexceptionData.elements}
        attributes={OoexceptionData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Ooexception, {
  path: `*[namespace-uri()='${OoexceptionData.namespace}' and local-name()='${OoexceptionData.localName}']`,
});
