import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import GroupData from "../defs/Group.2";

export { default as GroupData } from "../defs/Group.2";

export interface GroupProps {}

export interface GroupState {}

export class Group extends Transformer.Template<GroupProps, GroupState> {
  constructor(
    props: GroupProps & {
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
        mixed={GroupData.mixed}
        elements={GroupData.elements}
        attributes={GroupData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Group, {
  path: `*[namespace-uri()='${GroupData.namespace}' and local-name()='${GroupData.localName}']`,
});
