import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ColophonData from "../defs/Colophon";

export { default as ColophonData } from "../defs/Colophon";

export interface ColophonProps {}

export interface ColophonState {}

export class Colophon extends Transformer.Template<
  ColophonProps,
  ColophonState
> {
  constructor(
    props: ColophonProps & {
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
        mixed={ColophonData.mixed}
        elements={ColophonData.elements}
        attributes={ColophonData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Colophon, {
  path: `*[namespace-uri()='${ColophonData.namespace}' and local-name()='${ColophonData.localName}']`,
});
