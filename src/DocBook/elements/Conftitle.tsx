import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ConftitleData from "../defs/Conftitle";

export { default as ConftitleData } from "../defs/Conftitle";

export interface ConftitleProps {}

export interface ConftitleState {}

export class Conftitle extends Transformer.Template<
  ConftitleProps,
  ConftitleState
> {
  constructor(
    props: ConftitleProps & {
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
        mixed={ConftitleData.mixed}
        elements={ConftitleData.elements}
        attributes={ConftitleData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Conftitle, {
  path: `*[namespace-uri()='${ConftitleData.namespace}' and local-name()='${ConftitleData.localName}']`,
});
