import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import OointerfaceData from "../defs/Oointerface";

export { default as OointerfaceData } from "../defs/Oointerface";

export interface OointerfaceProps {}

export interface OointerfaceState {}

export class Oointerface extends Transformer.Template<
  OointerfaceProps,
  OointerfaceState
> {
  constructor(
    props: OointerfaceProps & {
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
        mixed={OointerfaceData.mixed}
        elements={OointerfaceData.elements}
        attributes={OointerfaceData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Oointerface, {
  path: `*[namespace-uri()='${OointerfaceData.namespace}' and local-name()='${OointerfaceData.localName}']`,
});
