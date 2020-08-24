import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import Sect2Data from "../defs/Sect2";

export { default as Sect2Data } from "../defs/Sect2";

export interface Sect2Props {}

export interface Sect2State {}

export class Sect2 extends Transformer.Template<Sect2Props, Sect2State> {
  constructor(
    props: Sect2Props & {
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
        mixed={Sect2Data.mixed}
        elements={Sect2Data.elements}
        attributes={Sect2Data.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Sect2, {
  path: `*[namespace-uri()='${Sect2Data.namespace}' and local-name()='${Sect2Data.localName}']`,
});
