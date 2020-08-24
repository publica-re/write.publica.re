import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BibliosourceData from "../defs/Bibliosource";

export { default as BibliosourceData } from "../defs/Bibliosource";

export interface BibliosourceProps {}

export interface BibliosourceState {}

export class Bibliosource extends Transformer.Template<
  BibliosourceProps,
  BibliosourceState
> {
  constructor(
    props: BibliosourceProps & {
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
        mixed={BibliosourceData.mixed}
        elements={BibliosourceData.elements}
        attributes={BibliosourceData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Bibliosource, {
  path: `*[namespace-uri()='${BibliosourceData.namespace}' and local-name()='${BibliosourceData.localName}']`,
});
