import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import Refsect1Data from "../defs/Refsect1";

export { default as Refsect1Data } from "../defs/Refsect1";

export interface Refsect1Props {}

export interface Refsect1State {}

export class Refsect1 extends Transformer.Template<
  Refsect1Props,
  Refsect1State
> {
  constructor(
    props: Refsect1Props & {
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
        mixed={Refsect1Data.mixed}
        elements={Refsect1Data.elements}
        attributes={Refsect1Data.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Refsect1, {
  path: `*[namespace-uri()='${Refsect1Data.namespace}' and local-name()='${Refsect1Data.localName}']`,
});
