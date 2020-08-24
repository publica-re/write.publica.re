import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ParamdefData from "../defs/Paramdef";

export { default as ParamdefData } from "../defs/Paramdef";

export interface ParamdefProps {}

export interface ParamdefState {}

export class Paramdef extends Transformer.Template<
  ParamdefProps,
  ParamdefState
> {
  constructor(
    props: ParamdefProps & {
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
        mixed={ParamdefData.mixed}
        elements={ParamdefData.elements}
        attributes={ParamdefData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Paramdef, {
  path: `*[namespace-uri()='${ParamdefData.namespace}' and local-name()='${ParamdefData.localName}']`,
});
