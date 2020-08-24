import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ExceptionnameData from "../defs/Exceptionname";

export { default as ExceptionnameData } from "../defs/Exceptionname";

export interface ExceptionnameProps {}

export interface ExceptionnameState {}

export class Exceptionname extends Transformer.Template<
  ExceptionnameProps,
  ExceptionnameState
> {
  constructor(
    props: ExceptionnameProps & {
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
        mixed={ExceptionnameData.mixed}
        elements={ExceptionnameData.elements}
        attributes={ExceptionnameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Exceptionname, {
  path: `*[namespace-uri()='${ExceptionnameData.namespace}' and local-name()='${ExceptionnameData.localName}']`,
});
