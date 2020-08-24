import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ConfgroupData from "../defs/Confgroup";

export { default as ConfgroupData } from "../defs/Confgroup";

export interface ConfgroupProps {}

export interface ConfgroupState {}

export class Confgroup extends Transformer.Template<
  ConfgroupProps,
  ConfgroupState
> {
  constructor(
    props: ConfgroupProps & {
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
        mixed={ConfgroupData.mixed}
        elements={ConfgroupData.elements}
        attributes={ConfgroupData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Confgroup, {
  path: `*[namespace-uri()='${ConfgroupData.namespace}' and local-name()='${ConfgroupData.localName}']`,
});
