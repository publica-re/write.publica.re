import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ReturnvalueData from "../defs/Returnvalue";

export { default as ReturnvalueData } from "../defs/Returnvalue";

export interface ReturnvalueProps {}

export interface ReturnvalueState {}

export class Returnvalue extends Transformer.Template<
  ReturnvalueProps,
  ReturnvalueState
> {
  constructor(
    props: ReturnvalueProps & {
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
        mixed={ReturnvalueData.mixed}
        elements={ReturnvalueData.elements}
        attributes={ReturnvalueData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Returnvalue, {
  path: `*[namespace-uri()='${ReturnvalueData.namespace}' and local-name()='${ReturnvalueData.localName}']`,
});
