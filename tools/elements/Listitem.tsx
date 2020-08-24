import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ListitemData from "../defs/Listitem";

export { default as ListitemData } from "../defs/Listitem";

export interface ListitemProps {}

export interface ListitemState {}

export class Listitem extends Transformer.Template<
  ListitemProps,
  ListitemState
> {
  constructor(
    props: ListitemProps & {
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
        mixed={ListitemData.mixed}
        elements={ListitemData.elements}
        attributes={ListitemData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Listitem, {
  path: `*[namespace-uri()='${ListitemData.namespace}' and local-name()='${ListitemData.localName}']`,
});
