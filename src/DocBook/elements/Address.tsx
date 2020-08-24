import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AddressData from "../defs/Address";

export { default as AddressData } from "../defs/Address";

export interface AddressProps {}

export interface AddressState {
  editing: boolean;
}

export class Address extends Transformer.Template<AddressProps, AddressState> {
  constructor(
    props: AddressProps & {
      contextData: typeof ctx;
      contextNode: Node;
    }
  ) {
    super(props);
    this.state = {
      ...this.state,
      editing: false,
    };
  }

  render() {
    return (
      <Insert
        mixed={AddressData.mixed}
        elements={AddressData.elements}
        attributes={AddressData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <address>
          <Transformer.ApplyTemplates {...this.ctx} />
        </address>
      </Insert>
    );
  }
}

ctx.register(Address, {
  path: `*[namespace-uri()='${AddressData.namespace}' and local-name()='${AddressData.localName}']`,
});
