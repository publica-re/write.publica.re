import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CorefData from "../defs/Coref";

export { default as CorefData } from "../defs/Coref";

export interface CorefProps {}

export interface CorefState {}

export class Coref extends Transformer.Template<CorefProps, CorefState> {
  constructor(
    props: CorefProps & {
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
        mixed={CorefData.mixed}
        elements={CorefData.elements}
        attributes={CorefData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Coref, {
  path: `*[namespace-uri()='${CorefData.namespace}' and local-name()='${CorefData.localName}']`,
});
