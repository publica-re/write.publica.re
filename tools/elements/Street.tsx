import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import StreetData from "../defs/Street";

export { default as StreetData } from "../defs/Street";

export interface StreetProps {}

export interface StreetState {}

export class Street extends Transformer.Template<StreetProps, StreetState> {
  constructor(
    props: StreetProps & {
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
        mixed={StreetData.mixed}
        elements={StreetData.elements}
        attributes={StreetData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Street, {
  path: `*[namespace-uri()='${StreetData.namespace}' and local-name()='${StreetData.localName}']`,
});
