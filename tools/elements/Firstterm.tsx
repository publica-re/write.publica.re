import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FirsttermData from "../defs/Firstterm";

export { default as FirsttermData } from "../defs/Firstterm";

export interface FirsttermProps {}

export interface FirsttermState {}

export class Firstterm extends Transformer.Template<
  FirsttermProps,
  FirsttermState
> {
  constructor(
    props: FirsttermProps & {
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
        mixed={FirsttermData.mixed}
        elements={FirsttermData.elements}
        attributes={FirsttermData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Firstterm, {
  path: `*[namespace-uri()='${FirsttermData.namespace}' and local-name()='${FirsttermData.localName}']`,
});
