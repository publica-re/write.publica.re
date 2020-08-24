import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TgroupData from "../defs/Tgroup";

export { default as TgroupData } from "../defs/Tgroup";

export interface TgroupProps {}

export interface TgroupState {}

export class Tgroup extends Transformer.Template<TgroupProps, TgroupState> {
  constructor(
    props: TgroupProps & {
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
        mixed={TgroupData.mixed}
        elements={TgroupData.elements}
        attributes={TgroupData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Tgroup, {
  path: `*[namespace-uri()='${TgroupData.namespace}' and local-name()='${TgroupData.localName}']`,
});
