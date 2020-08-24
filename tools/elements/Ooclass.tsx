import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import OoclassData from "../defs/Ooclass";

export { default as OoclassData } from "../defs/Ooclass";

export interface OoclassProps {}

export interface OoclassState {}

export class Ooclass extends Transformer.Template<OoclassProps, OoclassState> {
  constructor(
    props: OoclassProps & {
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
        mixed={OoclassData.mixed}
        elements={OoclassData.elements}
        attributes={OoclassData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Ooclass, {
  path: `*[namespace-uri()='${OoclassData.namespace}' and local-name()='${OoclassData.localName}']`,
});
