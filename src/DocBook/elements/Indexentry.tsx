import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import IndexentryData from "../defs/Indexentry";

export { default as IndexentryData } from "../defs/Indexentry";

export interface IndexentryProps {}

export interface IndexentryState {}

export class Indexentry extends Transformer.Template<
  IndexentryProps,
  IndexentryState
> {
  constructor(
    props: IndexentryProps & {
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
        mixed={IndexentryData.mixed}
        elements={IndexentryData.elements}
        attributes={IndexentryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Indexentry, {
  path: `*[namespace-uri()='${IndexentryData.namespace}' and local-name()='${IndexentryData.localName}']`,
});
