import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MsgtextData from "../defs/Msgtext";

export { default as MsgtextData } from "../defs/Msgtext";

export interface MsgtextProps {}

export interface MsgtextState {}

export class Msgtext extends Transformer.Template<MsgtextProps, MsgtextState> {
  constructor(
    props: MsgtextProps & {
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
        mixed={MsgtextData.mixed}
        elements={MsgtextData.elements}
        attributes={MsgtextData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Msgtext, {
  path: `*[namespace-uri()='${MsgtextData.namespace}' and local-name()='${MsgtextData.localName}']`,
});
