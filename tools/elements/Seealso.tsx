import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SeealsoData from "../defs/Seealso";

export { default as SeealsoData } from "../defs/Seealso";

export interface SeealsoProps {}

export interface SeealsoState {}

export class Seealso extends Transformer.Template<SeealsoProps, SeealsoState> {
  constructor(
    props: SeealsoProps & {
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
        mixed={SeealsoData.mixed}
        elements={SeealsoData.elements}
        attributes={SeealsoData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Seealso, {
  path: `*[namespace-uri()='${SeealsoData.namespace}' and local-name()='${SeealsoData.localName}']`,
});
