import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AcronymData from "../defs/Acronym";

export { default as AcronymData } from "../defs/Acronym";

export interface AcronymProps {}

export interface AcronymState {}

export class Acronym extends Transformer.Template<AcronymProps, AcronymState> {
  constructor(
    props: AcronymProps & {
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
        mixed={AcronymData.mixed}
        elements={AcronymData.elements}
        attributes={AcronymData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Acronym, {
  path: `*[namespace-uri()='${AcronymData.namespace}' and local-name()='${AcronymData.localName}']`,
});
