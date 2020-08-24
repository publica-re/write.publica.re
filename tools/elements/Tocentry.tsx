import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TocentryData from "../defs/Tocentry";

export { default as TocentryData } from "../defs/Tocentry";

export interface TocentryProps {}

export interface TocentryState {}

export class Tocentry extends Transformer.Template<
  TocentryProps,
  TocentryState
> {
  constructor(
    props: TocentryProps & {
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
        mixed={TocentryData.mixed}
        elements={TocentryData.elements}
        attributes={TocentryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Tocentry, {
  path: `*[namespace-uri()='${TocentryData.namespace}' and local-name()='${TocentryData.localName}']`,
});
