import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import LocatorData from "../defs/Locator";

export { default as LocatorData } from "../defs/Locator";

export interface LocatorProps {}

export interface LocatorState {}

export class Locator extends Transformer.Template<LocatorProps, LocatorState> {
  constructor(
    props: LocatorProps & {
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
        mixed={LocatorData.mixed}
        elements={LocatorData.elements}
        attributes={LocatorData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Locator, {
  path: `*[namespace-uri()='${LocatorData.namespace}' and local-name()='${LocatorData.localName}']`,
});
