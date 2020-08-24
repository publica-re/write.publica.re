import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ContribData from "../defs/Contrib";

export { default as ContribData } from "../defs/Contrib";

export interface ContribProps {}

export interface ContribState {}

export class Contrib extends Transformer.Template<ContribProps, ContribState> {
  constructor(
    props: ContribProps & {
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
        mixed={ContribData.mixed}
        elements={ContribData.elements}
        attributes={ContribData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Contrib, {
  path: `*[namespace-uri()='${ContribData.namespace}' and local-name()='${ContribData.localName}']`,
});
