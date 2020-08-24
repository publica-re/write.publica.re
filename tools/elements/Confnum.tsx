import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ConfnumData from "../defs/Confnum";

export { default as ConfnumData } from "../defs/Confnum";

export interface ConfnumProps {}

export interface ConfnumState {}

export class Confnum extends Transformer.Template<ConfnumProps, ConfnumState> {
  constructor(
    props: ConfnumProps & {
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
        mixed={ConfnumData.mixed}
        elements={ConfnumData.elements}
        attributes={ConfnumData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Confnum, {
  path: `*[namespace-uri()='${ConfnumData.namespace}' and local-name()='${ConfnumData.localName}']`,
});
