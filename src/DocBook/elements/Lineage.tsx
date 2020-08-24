import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import LineageData from "../defs/Lineage";

export { default as LineageData } from "../defs/Lineage";

export interface LineageProps {}

export interface LineageState {}

export class Lineage extends Transformer.Template<LineageProps, LineageState> {
  constructor(
    props: LineageProps & {
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
        mixed={LineageData.mixed}
        elements={LineageData.elements}
        attributes={LineageData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Lineage, {
  path: `*[namespace-uri()='${LineageData.namespace}' and local-name()='${LineageData.localName}']`,
});
