import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GuiiconData from "../defs/Guiicon";

export { default as GuiiconData } from "../defs/Guiicon";

export interface GuiiconProps {}

export interface GuiiconState {}

export class Guiicon extends Transformer.Template<GuiiconProps, GuiiconState> {
  constructor(
    props: GuiiconProps & {
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
        mixed={GuiiconData.mixed}
        elements={GuiiconData.elements}
        attributes={GuiiconData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Guiicon, {
  path: `*[namespace-uri()='${GuiiconData.namespace}' and local-name()='${GuiiconData.localName}']`,
});
