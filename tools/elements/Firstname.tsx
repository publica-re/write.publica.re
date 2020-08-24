import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FirstnameData from "../defs/Firstname";

export { default as FirstnameData } from "../defs/Firstname";

export interface FirstnameProps {}

export interface FirstnameState {}

export class Firstname extends Transformer.Template<
  FirstnameProps,
  FirstnameState
> {
  constructor(
    props: FirstnameProps & {
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
        mixed={FirstnameData.mixed}
        elements={FirstnameData.elements}
        attributes={FirstnameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Firstname, {
  path: `*[namespace-uri()='${FirstnameData.namespace}' and local-name()='${FirstnameData.localName}']`,
});
