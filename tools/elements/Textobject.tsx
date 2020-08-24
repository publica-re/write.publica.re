import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TextobjectData from "../defs/Textobject";

export { default as TextobjectData } from "../defs/Textobject";

export interface TextobjectProps {}

export interface TextobjectState {}

export class Textobject extends Transformer.Template<
  TextobjectProps,
  TextobjectState
> {
  constructor(
    props: TextobjectProps & {
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
        mixed={TextobjectData.mixed}
        elements={TextobjectData.elements}
        attributes={TextobjectData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Textobject, {
  path: `*[namespace-uri()='${TextobjectData.namespace}' and local-name()='${TextobjectData.localName}']`,
});
