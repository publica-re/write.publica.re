import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ItermsetData from "../defs/Itermset";

export { default as ItermsetData } from "../defs/Itermset";

export interface ItermsetProps {}

export interface ItermsetState {}

export class Itermset extends Transformer.Template<
  ItermsetProps,
  ItermsetState
> {
  constructor(
    props: ItermsetProps & {
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
        mixed={ItermsetData.mixed}
        elements={ItermsetData.elements}
        attributes={ItermsetData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Itermset, {
  path: `*[namespace-uri()='${ItermsetData.namespace}' and local-name()='${ItermsetData.localName}']`,
});
