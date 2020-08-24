import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SimplelistData from "../defs/Simplelist";

export { default as SimplelistData } from "../defs/Simplelist";

export interface SimplelistProps {}

export interface SimplelistState {}

export class Simplelist extends Transformer.Template<
  SimplelistProps,
  SimplelistState
> {
  constructor(
    props: SimplelistProps & {
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
        mixed={SimplelistData.mixed}
        elements={SimplelistData.elements}
        attributes={SimplelistData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Simplelist, {
  path: `*[namespace-uri()='${SimplelistData.namespace}' and local-name()='${SimplelistData.localName}']`,
});
