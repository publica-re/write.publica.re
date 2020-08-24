import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SidebarData from "../defs/Sidebar";

export { default as SidebarData } from "../defs/Sidebar";

export interface SidebarProps {}

export interface SidebarState {}

export class Sidebar extends Transformer.Template<SidebarProps, SidebarState> {
  constructor(
    props: SidebarProps & {
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
        mixed={SidebarData.mixed}
        elements={SidebarData.elements}
        attributes={SidebarData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Sidebar, {
  path: `*[namespace-uri()='${SidebarData.namespace}' and local-name()='${SidebarData.localName}']`,
});
