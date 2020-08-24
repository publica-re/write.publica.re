import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PublishernameData from "../defs/Publishername";

export { default as PublishernameData } from "../defs/Publishername";

export interface PublishernameProps {}

export interface PublishernameState {}

export class Publishername extends Transformer.Template<
  PublishernameProps,
  PublishernameState
> {
  constructor(
    props: PublishernameProps & {
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
        mixed={PublishernameData.mixed}
        elements={PublishernameData.elements}
        attributes={PublishernameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Publishername, {
  path: `*[namespace-uri()='${PublishernameData.namespace}' and local-name()='${PublishernameData.localName}']`,
});
