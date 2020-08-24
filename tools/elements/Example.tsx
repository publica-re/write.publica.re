import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ExampleData from "../defs/Example";

export { default as ExampleData } from "../defs/Example";

export interface ExampleProps {}

export interface ExampleState {}

export class Example extends Transformer.Template<ExampleProps, ExampleState> {
  constructor(
    props: ExampleProps & {
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
        mixed={ExampleData.mixed}
        elements={ExampleData.elements}
        attributes={ExampleData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Example, {
  path: `*[namespace-uri()='${ExampleData.namespace}' and local-name()='${ExampleData.localName}']`,
});
