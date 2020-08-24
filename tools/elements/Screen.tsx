import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ScreenData from "../defs/Screen";

export { default as ScreenData } from "../defs/Screen";

export interface ScreenProps {}

export interface ScreenState {}

export class Screen extends Transformer.Template<ScreenProps, ScreenState> {
  constructor(
    props: ScreenProps & {
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
        mixed={ScreenData.mixed}
        elements={ScreenData.elements}
        attributes={ScreenData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Screen, {
  path: `*[namespace-uri()='${ScreenData.namespace}' and local-name()='${ScreenData.localName}']`,
});
