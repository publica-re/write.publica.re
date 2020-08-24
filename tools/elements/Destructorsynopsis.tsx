import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import DestructorsynopsisData from "../defs/Destructorsynopsis";

export { default as DestructorsynopsisData } from "../defs/Destructorsynopsis";

export interface DestructorsynopsisProps {}

export interface DestructorsynopsisState {}

export class Destructorsynopsis extends Transformer.Template<
  DestructorsynopsisProps,
  DestructorsynopsisState
> {
  constructor(
    props: DestructorsynopsisProps & {
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
        mixed={DestructorsynopsisData.mixed}
        elements={DestructorsynopsisData.elements}
        attributes={DestructorsynopsisData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Destructorsynopsis, {
  path: `*[namespace-uri()='${DestructorsynopsisData.namespace}' and local-name()='${DestructorsynopsisData.localName}']`,
});
