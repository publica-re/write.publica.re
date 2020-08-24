import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ArgData from "../defs/Arg";

export { default as ArgData } from "../defs/Arg";

export interface ArgProps {}

export interface ArgState {}

export class Arg extends Transformer.Template<ArgProps, ArgState> {
  constructor(
    props: ArgProps & {
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
        mixed={ArgData.mixed}
        elements={ArgData.elements}
        attributes={ArgData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Arg, {
  path: `*[namespace-uri()='${ArgData.namespace}' and local-name()='${ArgData.localName}']`,
});
