import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GivennameData from "../defs/Givenname";

export { default as GivennameData } from "../defs/Givenname";

export interface GivennameProps {}

export interface GivennameState {}

export class Givenname extends Transformer.Template<
  GivennameProps,
  GivennameState
> {
  constructor(
    props: GivennameProps & {
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
        mixed={GivennameData.mixed}
        elements={GivennameData.elements}
        attributes={GivennameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Givenname, {
  path: `*[namespace-uri()='${GivennameData.namespace}' and local-name()='${GivennameData.localName}']`,
});
