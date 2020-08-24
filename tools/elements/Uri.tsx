import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import UriData from "../defs/Uri";

export { default as UriData } from "../defs/Uri";

export interface UriProps {}

export interface UriState {}

export class Uri extends Transformer.Template<UriProps, UriState> {
  constructor(
    props: UriProps & {
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
        mixed={UriData.mixed}
        elements={UriData.elements}
        attributes={UriData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Uri, {
  path: `*[namespace-uri()='${UriData.namespace}' and local-name()='${UriData.localName}']`,
});
