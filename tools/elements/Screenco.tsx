import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ScreencoData from "../defs/Screenco";

export { default as ScreencoData } from "../defs/Screenco";

export interface ScreencoProps {}

export interface ScreencoState {}

export class Screenco extends Transformer.Template<
  ScreencoProps,
  ScreencoState
> {
  constructor(
    props: ScreencoProps & {
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
        mixed={ScreencoData.mixed}
        elements={ScreencoData.elements}
        attributes={ScreencoData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Screenco, {
  path: `*[namespace-uri()='${ScreencoData.namespace}' and local-name()='${ScreencoData.localName}']`,
});
