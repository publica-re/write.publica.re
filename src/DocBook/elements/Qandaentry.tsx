import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import QandaentryData from "../defs/Qandaentry";

export { default as QandaentryData } from "../defs/Qandaentry";

export interface QandaentryProps {}

export interface QandaentryState {}

export class Qandaentry extends Transformer.Template<
  QandaentryProps,
  QandaentryState
> {
  constructor(
    props: QandaentryProps & {
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
        mixed={QandaentryData.mixed}
        elements={QandaentryData.elements}
        attributes={QandaentryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Qandaentry, {
  path: `*[namespace-uri()='${QandaentryData.namespace}' and local-name()='${QandaentryData.localName}']`,
});
