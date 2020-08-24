import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ErrornameData from "../defs/Errorname";

export { default as ErrornameData } from "../defs/Errorname";

export interface ErrornameProps {}

export interface ErrornameState {}

export class Errorname extends Transformer.Template<
  ErrornameProps,
  ErrornameState
> {
  constructor(
    props: ErrornameProps & {
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
        mixed={ErrornameData.mixed}
        elements={ErrornameData.elements}
        attributes={ErrornameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Errorname, {
  path: `*[namespace-uri()='${ErrornameData.namespace}' and local-name()='${ErrornameData.localName}']`,
});
