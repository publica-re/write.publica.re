import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import LinkData from "../defs/Link";

export { default as LinkData } from "../defs/Link";

export interface LinkProps {}

export interface LinkState {}

export class Link extends Transformer.Template<LinkProps, LinkState> {
  constructor(
    props: LinkProps & {
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
        mixed={LinkData.mixed}
        elements={LinkData.elements}
        attributes={LinkData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Link, {
  path: `*[namespace-uri()='${LinkData.namespace}' and local-name()='${LinkData.localName}']`,
});
