import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SuperscriptData from "../defs/Superscript";

export { default as SuperscriptData } from "../defs/Superscript";

export interface SuperscriptProps {}

export interface SuperscriptState {}

export class Superscript extends Transformer.Template<
  SuperscriptProps,
  SuperscriptState
> {
  constructor(
    props: SuperscriptProps & {
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
        mixed={SuperscriptData.mixed}
        elements={SuperscriptData.elements}
        attributes={SuperscriptData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Superscript, {
  path: `*[namespace-uri()='${SuperscriptData.namespace}' and local-name()='${SuperscriptData.localName}']`,
});
