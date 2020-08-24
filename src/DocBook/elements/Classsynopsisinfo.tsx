import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ClasssynopsisinfoData from "../defs/Classsynopsisinfo";

export { default as ClasssynopsisinfoData } from "../defs/Classsynopsisinfo";

export interface ClasssynopsisinfoProps {}

export interface ClasssynopsisinfoState {}

export class Classsynopsisinfo extends Transformer.Template<
  ClasssynopsisinfoProps,
  ClasssynopsisinfoState
> {
  constructor(
    props: ClasssynopsisinfoProps & {
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
        mixed={ClasssynopsisinfoData.mixed}
        elements={ClasssynopsisinfoData.elements}
        attributes={ClasssynopsisinfoData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Classsynopsisinfo, {
  path: `*[namespace-uri()='${ClasssynopsisinfoData.namespace}' and local-name()='${ClasssynopsisinfoData.localName}']`,
});
