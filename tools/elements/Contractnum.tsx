import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ContractnumData from "../defs/Contractnum";

export { default as ContractnumData } from "../defs/Contractnum";

export interface ContractnumProps {}

export interface ContractnumState {}

export class Contractnum extends Transformer.Template<
  ContractnumProps,
  ContractnumState
> {
  constructor(
    props: ContractnumProps & {
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
        mixed={ContractnumData.mixed}
        elements={ContractnumData.elements}
        attributes={ContractnumData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Contractnum, {
  path: `*[namespace-uri()='${ContractnumData.namespace}' and local-name()='${ContractnumData.localName}']`,
});
