import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SetindexData from "../defs/Setindex";

export { default as SetindexData } from "../defs/Setindex";

export interface SetindexProps {}

export interface SetindexState {}

export class Setindex extends Transformer.Template<
  SetindexProps,
  SetindexState
> {
  constructor(
    props: SetindexProps & {
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
        mixed={SetindexData.mixed}
        elements={SetindexData.elements}
        attributes={SetindexData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Setindex, {
  path: `*[namespace-uri()='${SetindexData.namespace}' and local-name()='${SetindexData.localName}']`,
});
