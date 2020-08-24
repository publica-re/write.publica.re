import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import Refsect2Data from "../defs/Refsect2";

export { default as Refsect2Data } from "../defs/Refsect2";

export interface Refsect2Props {}

export interface Refsect2State {}

export class Refsect2 extends Transformer.Template<
  Refsect2Props,
  Refsect2State
> {
  constructor(
    props: Refsect2Props & {
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
        mixed={Refsect2Data.mixed}
        elements={Refsect2Data.elements}
        attributes={Refsect2Data.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Refsect2, {
  path: `*[namespace-uri()='${Refsect2Data.namespace}' and local-name()='${Refsect2Data.localName}']`,
});
