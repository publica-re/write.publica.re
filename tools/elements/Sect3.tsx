import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import Sect3Data from "../defs/Sect3";

export { default as Sect3Data } from "../defs/Sect3";

export interface Sect3Props {}

export interface Sect3State {}

export class Sect3 extends Transformer.Template<Sect3Props, Sect3State> {
  constructor(
    props: Sect3Props & {
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
        mixed={Sect3Data.mixed}
        elements={Sect3Data.elements}
        attributes={Sect3Data.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Sect3, {
  path: `*[namespace-uri()='${Sect3Data.namespace}' and local-name()='${Sect3Data.localName}']`,
});
