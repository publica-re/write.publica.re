import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ErrortypeData from "../defs/Errortype";

export { default as ErrortypeData } from "../defs/Errortype";

export interface ErrortypeProps {}

export interface ErrortypeState {}

export class Errortype extends Transformer.Template<
  ErrortypeProps,
  ErrortypeState
> {
  constructor(
    props: ErrortypeProps & {
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
        mixed={ErrortypeData.mixed}
        elements={ErrortypeData.elements}
        attributes={ErrortypeData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Errortype, {
  path: `*[namespace-uri()='${ErrortypeData.namespace}' and local-name()='${ErrortypeData.localName}']`,
});
