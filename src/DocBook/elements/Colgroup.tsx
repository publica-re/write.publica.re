import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ColgroupData from "../defs/Colgroup";

export { default as ColgroupData } from "../defs/Colgroup";

export interface ColgroupProps {}

export interface ColgroupState {}

export class Colgroup extends Transformer.Template<
  ColgroupProps,
  ColgroupState
> {
  constructor(
    props: ColgroupProps & {
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
        mixed={ColgroupData.mixed}
        elements={ColgroupData.elements}
        attributes={ColgroupData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Colgroup, {
  path: `*[namespace-uri()='${ColgroupData.namespace}' and local-name()='${ColgroupData.localName}']`,
});
