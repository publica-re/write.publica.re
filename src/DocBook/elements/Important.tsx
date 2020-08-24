import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ImportantData from "../defs/Important";

export { default as ImportantData } from "../defs/Important";

export interface ImportantProps {}

export interface ImportantState {}

export class Important extends Transformer.Template<
  ImportantProps,
  ImportantState
> {
  constructor(
    props: ImportantProps & {
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
        mixed={ImportantData.mixed}
        elements={ImportantData.elements}
        attributes={ImportantData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Important, {
  path: `*[namespace-uri()='${ImportantData.namespace}' and local-name()='${ImportantData.localName}']`,
});
