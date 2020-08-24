import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import Sect1Data from "../defs/Sect1";

export { default as Sect1Data } from "../defs/Sect1";

export interface Sect1Props {}

export interface Sect1State {}

export class Sect1 extends Transformer.Template<Sect1Props, Sect1State> {
  constructor(
    props: Sect1Props & {
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
        mixed={Sect1Data.mixed}
        elements={Sect1Data.elements}
        attributes={Sect1Data.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Sect1, {
  path: `*[namespace-uri()='${Sect1Data.namespace}' and local-name()='${Sect1Data.localName}']`,
});
