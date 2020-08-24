import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PublisherData from "../defs/Publisher";

export { default as PublisherData } from "../defs/Publisher";

export interface PublisherProps {}

export interface PublisherState {}

export class Publisher extends Transformer.Template<
  PublisherProps,
  PublisherState
> {
  constructor(
    props: PublisherProps & {
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
        mixed={PublisherData.mixed}
        elements={PublisherData.elements}
        attributes={PublisherData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Publisher, {
  path: `*[namespace-uri()='${PublisherData.namespace}' and local-name()='${PublisherData.localName}']`,
});
