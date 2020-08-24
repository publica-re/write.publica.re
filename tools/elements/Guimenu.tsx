import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GuimenuData from "../defs/Guimenu";

export { default as GuimenuData } from "../defs/Guimenu";

export interface GuimenuProps {}

export interface GuimenuState {}

export class Guimenu extends Transformer.Template<GuimenuProps, GuimenuState> {
  constructor(
    props: GuimenuProps & {
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
        mixed={GuimenuData.mixed}
        elements={GuimenuData.elements}
        attributes={GuimenuData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Guimenu, {
  path: `*[namespace-uri()='${GuimenuData.namespace}' and local-name()='${GuimenuData.localName}']`,
});
