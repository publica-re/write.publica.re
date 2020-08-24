import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AreaData from "../defs/Area.1";

export { default as AreaData } from "../defs/Area.1";

export interface AreaProps {}

export interface AreaState {}

export class Area extends Transformer.Template<AreaProps, AreaState> {
  constructor(
    props: AreaProps & {
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
        mixed={AreaData.mixed}
        elements={AreaData.elements}
        attributes={AreaData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Area, {
  path: `*[namespace-uri()='${AreaData.namespace}' and local-name()='${AreaData.localName}']`,
});
