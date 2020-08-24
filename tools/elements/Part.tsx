import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PartData from "../defs/Part";

export { default as PartData } from "../defs/Part";

export interface PartProps {}

export interface PartState {}

export class Part extends Transformer.Template<PartProps, PartState> {
  constructor(
    props: PartProps & {
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
        mixed={PartData.mixed}
        elements={PartData.elements}
        attributes={PartData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Part, {
  path: `*[namespace-uri()='${PartData.namespace}' and local-name()='${PartData.localName}']`,
});
