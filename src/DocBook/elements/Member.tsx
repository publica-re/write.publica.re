import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MemberData from "../defs/Member";

export { default as MemberData } from "../defs/Member";

export interface MemberProps {}

export interface MemberState {}

export class Member extends Transformer.Template<MemberProps, MemberState> {
  constructor(
    props: MemberProps & {
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
        mixed={MemberData.mixed}
        elements={MemberData.elements}
        attributes={MemberData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Member, {
  path: `*[namespace-uri()='${MemberData.namespace}' and local-name()='${MemberData.localName}']`,
});
