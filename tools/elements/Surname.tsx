import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SurnameData from "../defs/Surname";

export { default as SurnameData } from "../defs/Surname";

export interface SurnameProps {}

export interface SurnameState {}

export class Surname extends Transformer.Template<SurnameProps, SurnameState> {
  constructor(
    props: SurnameProps & {
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
        mixed={SurnameData.mixed}
        elements={SurnameData.elements}
        attributes={SurnameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Surname, {
  path: `*[namespace-uri()='${SurnameData.namespace}' and local-name()='${SurnameData.localName}']`,
});
