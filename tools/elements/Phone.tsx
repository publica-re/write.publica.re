import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PhoneData from "../defs/Phone";

export { default as PhoneData } from "../defs/Phone";

export interface PhoneProps {}

export interface PhoneState {}

export class Phone extends Transformer.Template<PhoneProps, PhoneState> {
  constructor(
    props: PhoneProps & {
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
        mixed={PhoneData.mixed}
        elements={PhoneData.elements}
        attributes={PhoneData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Phone, {
  path: `*[namespace-uri()='${PhoneData.namespace}' and local-name()='${PhoneData.localName}']`,
});
