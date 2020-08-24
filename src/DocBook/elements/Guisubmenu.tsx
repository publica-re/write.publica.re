import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GuisubmenuData from "../defs/Guisubmenu";

export { default as GuisubmenuData } from "../defs/Guisubmenu";

export interface GuisubmenuProps {}

export interface GuisubmenuState {}

export class Guisubmenu extends Transformer.Template<
  GuisubmenuProps,
  GuisubmenuState
> {
  constructor(
    props: GuisubmenuProps & {
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
        mixed={GuisubmenuData.mixed}
        elements={GuisubmenuData.elements}
        attributes={GuisubmenuData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Guisubmenu, {
  path: `*[namespace-uri()='${GuisubmenuData.namespace}' and local-name()='${GuisubmenuData.localName}']`,
});
