import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RevremarkData from "../defs/Revremark";

export { default as RevremarkData } from "../defs/Revremark";

export interface RevremarkProps {}

export interface RevremarkState {}

export class Revremark extends Transformer.Template<
  RevremarkProps,
  RevremarkState
> {
  constructor(
    props: RevremarkProps & {
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
        mixed={RevremarkData.mixed}
        elements={RevremarkData.elements}
        attributes={RevremarkData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Revremark, {
  path: `*[namespace-uri()='${RevremarkData.namespace}' and local-name()='${RevremarkData.localName}']`,
});
