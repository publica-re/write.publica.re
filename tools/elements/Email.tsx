import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import EmailData from "../defs/Email";

export { default as EmailData } from "../defs/Email";

export interface EmailProps {}

export interface EmailState {}

export class Email extends Transformer.Template<EmailProps, EmailState> {
  constructor(
    props: EmailProps & {
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
        mixed={EmailData.mixed}
        elements={EmailData.elements}
        attributes={EmailData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Email, {
  path: `*[namespace-uri()='${EmailData.namespace}' and local-name()='${EmailData.localName}']`,
});
