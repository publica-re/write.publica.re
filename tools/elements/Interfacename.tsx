import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import InterfacenameData from "../defs/Interfacename";

export { default as InterfacenameData } from "../defs/Interfacename";

export interface InterfacenameProps {}

export interface InterfacenameState {}

export class Interfacename extends Transformer.Template<
  InterfacenameProps,
  InterfacenameState
> {
  constructor(
    props: InterfacenameProps & {
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
        mixed={InterfacenameData.mixed}
        elements={InterfacenameData.elements}
        attributes={InterfacenameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Interfacename, {
  path: `*[namespace-uri()='${InterfacenameData.namespace}' and local-name()='${InterfacenameData.localName}']`,
});
