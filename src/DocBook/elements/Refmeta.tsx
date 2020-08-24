import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RefmetaData from "../defs/Refmeta";

export { default as RefmetaData } from "../defs/Refmeta";

export interface RefmetaProps {}

export interface RefmetaState {}

export class Refmeta extends Transformer.Template<RefmetaProps, RefmetaState> {
  constructor(
    props: RefmetaProps & {
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
        mixed={RefmetaData.mixed}
        elements={RefmetaData.elements}
        attributes={RefmetaData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Refmeta, {
  path: `*[namespace-uri()='${RefmetaData.namespace}' and local-name()='${RefmetaData.localName}']`,
});
