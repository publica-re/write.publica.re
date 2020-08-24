import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ArcData from "../defs/Arc";

export { default as ArcData } from "../defs/Arc";

export interface ArcProps {}

export interface ArcState {}

export class Arc extends Transformer.Template<ArcProps, ArcState> {
  constructor(
    props: ArcProps & {
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
        mixed={ArcData.mixed}
        elements={ArcData.elements}
        attributes={ArcData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Arc, {
  path: `*[namespace-uri()='${ArcData.namespace}' and local-name()='${ArcData.localName}']`,
});
