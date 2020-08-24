import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AreasetData from "../defs/Areaset";

export { default as AreasetData } from "../defs/Areaset";

export interface AreasetProps {}

export interface AreasetState {}

export class Areaset extends Transformer.Template<AreasetProps, AreasetState> {
  constructor(
    props: AreasetProps & {
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
        mixed={AreasetData.mixed}
        elements={AreasetData.elements}
        attributes={AreasetData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Areaset, {
  path: `*[namespace-uri()='${AreasetData.namespace}' and local-name()='${AreasetData.localName}']`,
});
