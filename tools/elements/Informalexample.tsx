import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import InformalexampleData from "../defs/Informalexample";

export { default as InformalexampleData } from "../defs/Informalexample";

export interface InformalexampleProps {}

export interface InformalexampleState {}

export class Informalexample extends Transformer.Template<
  InformalexampleProps,
  InformalexampleState
> {
  constructor(
    props: InformalexampleProps & {
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
        mixed={InformalexampleData.mixed}
        elements={InformalexampleData.elements}
        attributes={InformalexampleData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Informalexample, {
  path: `*[namespace-uri()='${InformalexampleData.namespace}' and local-name()='${InformalexampleData.localName}']`,
});
