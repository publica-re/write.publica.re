import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RefclassData from "../defs/Refclass";

export { default as RefclassData } from "../defs/Refclass";

export interface RefclassProps {}

export interface RefclassState {}

export class Refclass extends Transformer.Template<
  RefclassProps,
  RefclassState
> {
  constructor(
    props: RefclassProps & {
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
        mixed={RefclassData.mixed}
        elements={RefclassData.elements}
        attributes={RefclassData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Refclass, {
  path: `*[namespace-uri()='${RefclassData.namespace}' and local-name()='${RefclassData.localName}']`,
});
