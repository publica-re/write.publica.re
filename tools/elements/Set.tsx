import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SetData from "../defs/Set";

export { default as SetData } from "../defs/Set";

export interface SetProps {}

export interface SetState {}

export class Set extends Transformer.Template<SetProps, SetState> {
  constructor(
    props: SetProps & {
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
        mixed={SetData.mixed}
        elements={SetData.elements}
        attributes={SetData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Set, {
  path: `*[namespace-uri()='${SetData.namespace}' and local-name()='${SetData.localName}']`,
});
