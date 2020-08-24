import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ShortaffilData from "../defs/Shortaffil";

export { default as ShortaffilData } from "../defs/Shortaffil";

export interface ShortaffilProps {}

export interface ShortaffilState {}

export class Shortaffil extends Transformer.Template<
  ShortaffilProps,
  ShortaffilState
> {
  constructor(
    props: ShortaffilProps & {
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
        mixed={ShortaffilData.mixed}
        elements={ShortaffilData.elements}
        attributes={ShortaffilData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Shortaffil, {
  path: `*[namespace-uri()='${ShortaffilData.namespace}' and local-name()='${ShortaffilData.localName}']`,
});
