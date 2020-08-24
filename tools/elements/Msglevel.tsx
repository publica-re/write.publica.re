import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MsglevelData from "../defs/Msglevel";

export { default as MsglevelData } from "../defs/Msglevel";

export interface MsglevelProps {}

export interface MsglevelState {}

export class Msglevel extends Transformer.Template<
  MsglevelProps,
  MsglevelState
> {
  constructor(
    props: MsglevelProps & {
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
        mixed={MsglevelData.mixed}
        elements={MsglevelData.elements}
        attributes={MsglevelData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Msglevel, {
  path: `*[namespace-uri()='${MsglevelData.namespace}' and local-name()='${MsglevelData.localName}']`,
});
