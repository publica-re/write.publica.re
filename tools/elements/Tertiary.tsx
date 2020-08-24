import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TertiaryData from "../defs/Tertiary";

export { default as TertiaryData } from "../defs/Tertiary";

export interface TertiaryProps {}

export interface TertiaryState {}

export class Tertiary extends Transformer.Template<
  TertiaryProps,
  TertiaryState
> {
  constructor(
    props: TertiaryProps & {
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
        mixed={TertiaryData.mixed}
        elements={TertiaryData.elements}
        attributes={TertiaryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Tertiary, {
  path: `*[namespace-uri()='${TertiaryData.namespace}' and local-name()='${TertiaryData.localName}']`,
});
