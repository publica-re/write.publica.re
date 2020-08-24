import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PersonnameData from "../defs/Personname";

export { default as PersonnameData } from "../defs/Personname";

export interface PersonnameProps {}

export interface PersonnameState {}

export class Personname extends Transformer.Template<
  PersonnameProps,
  PersonnameState
> {
  constructor(
    props: PersonnameProps & {
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
        mixed={PersonnameData.mixed}
        elements={PersonnameData.elements}
        attributes={PersonnameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Personname, {
  path: `*[namespace-uri()='${PersonnameData.namespace}' and local-name()='${PersonnameData.localName}']`,
});
