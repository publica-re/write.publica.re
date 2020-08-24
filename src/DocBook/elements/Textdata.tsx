import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TextdataData from "../defs/Textdata";

export { default as TextdataData } from "../defs/Textdata";

export interface TextdataProps {}

export interface TextdataState {}

export class Textdata extends Transformer.Template<
  TextdataProps,
  TextdataState
> {
  constructor(
    props: TextdataProps & {
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
        mixed={TextdataData.mixed}
        elements={TextdataData.elements}
        attributes={TextdataData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Textdata, {
  path: `*[namespace-uri()='${TextdataData.namespace}' and local-name()='${TextdataData.localName}']`,
});
