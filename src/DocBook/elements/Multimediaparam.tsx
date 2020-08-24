import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MultimediaparamData from "../defs/Multimediaparam";

export { default as MultimediaparamData } from "../defs/Multimediaparam";

export interface MultimediaparamProps {}

export interface MultimediaparamState {}

export class Multimediaparam extends Transformer.Template<
  MultimediaparamProps,
  MultimediaparamState
> {
  constructor(
    props: MultimediaparamProps & {
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
        mixed={MultimediaparamData.mixed}
        elements={MultimediaparamData.elements}
        attributes={MultimediaparamData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Multimediaparam, {
  path: `*[namespace-uri()='${MultimediaparamData.namespace}' and local-name()='${MultimediaparamData.localName}']`,
});
