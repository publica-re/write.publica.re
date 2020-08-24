import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import EnvarData from "../defs/Envar";

export { default as EnvarData } from "../defs/Envar";

export interface EnvarProps {}

export interface EnvarState {}

export class Envar extends Transformer.Template<EnvarProps, EnvarState> {
  constructor(
    props: EnvarProps & {
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
        mixed={EnvarData.mixed}
        elements={EnvarData.elements}
        attributes={EnvarData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Envar, {
  path: `*[namespace-uri()='${EnvarData.namespace}' and local-name()='${EnvarData.localName}']`,
});
