import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PackageData from "../defs/Package";

export { default as PackageData } from "../defs/Package";

export interface PackageProps {}

export interface PackageState {}

export class Package extends Transformer.Template<PackageProps, PackageState> {
  constructor(
    props: PackageProps & {
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
        mixed={PackageData.mixed}
        elements={PackageData.elements}
        attributes={PackageData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Package, {
  path: `*[namespace-uri()='${PackageData.namespace}' and local-name()='${PackageData.localName}']`,
});
