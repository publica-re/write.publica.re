import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GuimenuitemData from "../defs/Guimenuitem";

export { default as GuimenuitemData } from "../defs/Guimenuitem";

export interface GuimenuitemProps {}

export interface GuimenuitemState {}

export class Guimenuitem extends Transformer.Template<
  GuimenuitemProps,
  GuimenuitemState
> {
  constructor(
    props: GuimenuitemProps & {
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
        mixed={GuimenuitemData.mixed}
        elements={GuimenuitemData.elements}
        attributes={GuimenuitemData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Guimenuitem, {
  path: `*[namespace-uri()='${GuimenuitemData.namespace}' and local-name()='${GuimenuitemData.localName}']`,
});
