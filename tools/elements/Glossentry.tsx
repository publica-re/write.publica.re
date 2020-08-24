import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GlossentryData from "../defs/Glossentry";

export { default as GlossentryData } from "../defs/Glossentry";

export interface GlossentryProps {}

export interface GlossentryState {}

export class Glossentry extends Transformer.Template<
  GlossentryProps,
  GlossentryState
> {
  constructor(
    props: GlossentryProps & {
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
        mixed={GlossentryData.mixed}
        elements={GlossentryData.elements}
        attributes={GlossentryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Glossentry, {
  path: `*[namespace-uri()='${GlossentryData.namespace}' and local-name()='${GlossentryData.localName}']`,
});
