import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ReplaceableData from "../defs/Replaceable";

export { default as ReplaceableData } from "../defs/Replaceable";

export interface ReplaceableProps {}

export interface ReplaceableState {}

export class Replaceable extends Transformer.Template<
  ReplaceableProps,
  ReplaceableState
> {
  constructor(
    props: ReplaceableProps & {
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
        mixed={ReplaceableData.mixed}
        elements={ReplaceableData.elements}
        attributes={ReplaceableData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Replaceable, {
  path: `*[namespace-uri()='${ReplaceableData.namespace}' and local-name()='${ReplaceableData.localName}']`,
});
