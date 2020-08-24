import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import Refsect3Data from "../defs/Refsect3";

export { default as Refsect3Data } from "../defs/Refsect3";

export interface Refsect3Props {}

export interface Refsect3State {}

export class Refsect3 extends Transformer.Template<
  Refsect3Props,
  Refsect3State
> {
  constructor(
    props: Refsect3Props & {
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
        mixed={Refsect3Data.mixed}
        elements={Refsect3Data.elements}
        attributes={Refsect3Data.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Refsect3, {
  path: `*[namespace-uri()='${Refsect3Data.namespace}' and local-name()='${Refsect3Data.localName}']`,
});
