import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import Sect5Data from "../defs/Sect5";

export { default as Sect5Data } from "../defs/Sect5";

export interface Sect5Props {}

export interface Sect5State {}

export class Sect5 extends Transformer.Template<Sect5Props, Sect5State> {
  constructor(
    props: Sect5Props & {
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
        mixed={Sect5Data.mixed}
        elements={Sect5Data.elements}
        attributes={Sect5Data.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Sect5, {
  path: `*[namespace-uri()='${Sect5Data.namespace}' and local-name()='${Sect5Data.localName}']`,
});
