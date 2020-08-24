import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import OlinkData from "../defs/Olink";

export { default as OlinkData } from "../defs/Olink";

export interface OlinkProps {}

export interface OlinkState {}

export class Olink extends Transformer.Template<OlinkProps, OlinkState> {
  constructor(
    props: OlinkProps & {
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
        mixed={OlinkData.mixed}
        elements={OlinkData.elements}
        attributes={OlinkData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Olink, {
  path: `*[namespace-uri()='${OlinkData.namespace}' and local-name()='${OlinkData.localName}']`,
});
