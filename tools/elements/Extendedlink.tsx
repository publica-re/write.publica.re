import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ExtendedlinkData from "../defs/Extendedlink";

export { default as ExtendedlinkData } from "../defs/Extendedlink";

export interface ExtendedlinkProps {}

export interface ExtendedlinkState {}

export class Extendedlink extends Transformer.Template<
  ExtendedlinkProps,
  ExtendedlinkState
> {
  constructor(
    props: ExtendedlinkProps & {
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
        mixed={ExtendedlinkData.mixed}
        elements={ExtendedlinkData.elements}
        attributes={ExtendedlinkData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Extendedlink, {
  path: `*[namespace-uri()='${ExtendedlinkData.namespace}' and local-name()='${ExtendedlinkData.localName}']`,
});
