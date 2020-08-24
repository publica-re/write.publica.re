import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import IndextermData from "../defs/Indexterm";

export { default as IndextermData } from "../defs/Indexterm";

export interface IndextermProps {}

export interface IndextermState {}

export class Indexterm extends Transformer.Template<
  IndextermProps,
  IndextermState
> {
  constructor(
    props: IndextermProps & {
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
        mixed={IndextermData.mixed}
        elements={IndextermData.elements}
        attributes={IndextermData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Indexterm, {
  path: `*[namespace-uri()='${IndextermData.namespace}' and local-name()='${IndextermData.localName}']`,
});
