import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SeeData from "../defs/See";

export { default as SeeData } from "../defs/See";

export interface SeeProps {}

export interface SeeState {}

export class See extends Transformer.Template<SeeProps, SeeState> {
  constructor(
    props: SeeProps & {
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
        mixed={SeeData.mixed}
        elements={SeeData.elements}
        attributes={SeeData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(See, {
  path: `*[namespace-uri()='${SeeData.namespace}' and local-name()='${SeeData.localName}']`,
});
