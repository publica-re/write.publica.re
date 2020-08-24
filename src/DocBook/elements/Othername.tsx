import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import OthernameData from "../defs/Othername";

export { default as OthernameData } from "../defs/Othername";

export interface OthernameProps {}

export interface OthernameState {}

export class Othername extends Transformer.Template<
  OthernameProps,
  OthernameState
> {
  constructor(
    props: OthernameProps & {
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
        mixed={OthernameData.mixed}
        elements={OthernameData.elements}
        attributes={OthernameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Othername, {
  path: `*[namespace-uri()='${OthernameData.namespace}' and local-name()='${OthernameData.localName}']`,
});
