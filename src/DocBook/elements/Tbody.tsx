import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TbodyData from "../defs/Tbody";

export { default as TbodyData } from "../defs/Tbody";

export interface TbodyProps {}

export interface TbodyState {}

export class Tbody extends Transformer.Template<TbodyProps, TbodyState> {
  constructor(
    props: TbodyProps & {
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
        mixed={TbodyData.mixed}
        elements={TbodyData.elements}
        attributes={TbodyData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Tbody, {
  path: `*[namespace-uri()='${TbodyData.namespace}' and local-name()='${TbodyData.localName}']`,
});
