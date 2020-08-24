import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SbrData from "../defs/Sbr";

export { default as SbrData } from "../defs/Sbr";

export interface SbrProps {}

export interface SbrState {}

export class Sbr extends Transformer.Template<SbrProps, SbrState> {
  constructor(
    props: SbrProps & {
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
        mixed={SbrData.mixed}
        elements={SbrData.elements}
        attributes={SbrData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Sbr, {
  path: `*[namespace-uri()='${SbrData.namespace}' and local-name()='${SbrData.localName}']`,
});
