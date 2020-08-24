import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import Sect4Data from "../defs/Sect4";

export { default as Sect4Data } from "../defs/Sect4";

export interface Sect4Props {}

export interface Sect4State {}

export class Sect4 extends Transformer.Template<Sect4Props, Sect4State> {
  constructor(
    props: Sect4Props & {
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
        mixed={Sect4Data.mixed}
        elements={Sect4Data.elements}
        attributes={Sect4Data.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Sect4, {
  path: `*[namespace-uri()='${Sect4Data.namespace}' and local-name()='${Sect4Data.localName}']`,
});
