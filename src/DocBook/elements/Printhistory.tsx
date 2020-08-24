import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PrinthistoryData from "../defs/Printhistory";

export { default as PrinthistoryData } from "../defs/Printhistory";

export interface PrinthistoryProps {}

export interface PrinthistoryState {}

export class Printhistory extends Transformer.Template<
  PrinthistoryProps,
  PrinthistoryState
> {
  constructor(
    props: PrinthistoryProps & {
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
        mixed={PrinthistoryData.mixed}
        elements={PrinthistoryData.elements}
        attributes={PrinthistoryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Printhistory, {
  path: `*[namespace-uri()='${PrinthistoryData.namespace}' and local-name()='${PrinthistoryData.localName}']`,
});
