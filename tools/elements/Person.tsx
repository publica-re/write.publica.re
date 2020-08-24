import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PersonData from "../defs/Person";

export { default as PersonData } from "../defs/Person";

export interface PersonProps {}

export interface PersonState {}

export class Person extends Transformer.Template<PersonProps, PersonState> {
  constructor(
    props: PersonProps & {
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
        mixed={PersonData.mixed}
        elements={PersonData.elements}
        attributes={PersonData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Person, {
  path: `*[namespace-uri()='${PersonData.namespace}' and local-name()='${PersonData.localName}']`,
});
