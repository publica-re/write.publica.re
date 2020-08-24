import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ErrortextData from "../defs/Errortext";

export { default as ErrortextData } from "../defs/Errortext";

export interface ErrortextProps {}

export interface ErrortextState {}

export class Errortext extends Transformer.Template<
  ErrortextProps,
  ErrortextState
> {
  constructor(
    props: ErrortextProps & {
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
        mixed={ErrortextData.mixed}
        elements={ErrortextData.elements}
        attributes={ErrortextData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Errortext, {
  path: `*[namespace-uri()='${ErrortextData.namespace}' and local-name()='${ErrortextData.localName}']`,
});
