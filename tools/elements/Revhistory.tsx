import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RevhistoryData from "../defs/Revhistory";

export { default as RevhistoryData } from "../defs/Revhistory";

export interface RevhistoryProps {}

export interface RevhistoryState {}

export class Revhistory extends Transformer.Template<
  RevhistoryProps,
  RevhistoryState
> {
  constructor(
    props: RevhistoryProps & {
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
        mixed={RevhistoryData.mixed}
        elements={RevhistoryData.elements}
        attributes={RevhistoryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Revhistory, {
  path: `*[namespace-uri()='${RevhistoryData.namespace}' and local-name()='${RevhistoryData.localName}']`,
});
