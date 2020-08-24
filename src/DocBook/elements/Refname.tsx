import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RefnameData from "../defs/Refname";

export { default as RefnameData } from "../defs/Refname";

export interface RefnameProps {}

export interface RefnameState {}

export class Refname extends Transformer.Template<RefnameProps, RefnameState> {
  constructor(
    props: RefnameProps & {
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
        mixed={RefnameData.mixed}
        elements={RefnameData.elements}
        attributes={RefnameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Refname, {
  path: `*[namespace-uri()='${RefnameData.namespace}' and local-name()='${RefnameData.localName}']`,
});
