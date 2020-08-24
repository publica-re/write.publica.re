import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ClasssynopsisData from "../defs/Classsynopsis";

export { default as ClasssynopsisData } from "../defs/Classsynopsis";

export interface ClasssynopsisProps {}

export interface ClasssynopsisState {}

export class Classsynopsis extends Transformer.Template<
  ClasssynopsisProps,
  ClasssynopsisState
> {
  constructor(
    props: ClasssynopsisProps & {
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
        mixed={ClasssynopsisData.mixed}
        elements={ClasssynopsisData.elements}
        attributes={ClasssynopsisData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Classsynopsis, {
  path: `*[namespace-uri()='${ClasssynopsisData.namespace}' and local-name()='${ClasssynopsisData.localName}']`,
});
