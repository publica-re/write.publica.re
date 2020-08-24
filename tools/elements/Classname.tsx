import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ClassnameData from "../defs/Classname";

export { default as ClassnameData } from "../defs/Classname";

export interface ClassnameProps {}

export interface ClassnameState {}

export class Classname extends Transformer.Template<
  ClassnameProps,
  ClassnameState
> {
  constructor(
    props: ClassnameProps & {
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
        mixed={ClassnameData.mixed}
        elements={ClassnameData.elements}
        attributes={ClassnameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Classname, {
  path: `*[namespace-uri()='${ClassnameData.namespace}' and local-name()='${ClassnameData.localName}']`,
});
