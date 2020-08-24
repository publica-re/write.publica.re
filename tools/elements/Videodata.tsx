import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import VideodataData from "../defs/Videodata";

export { default as VideodataData } from "../defs/Videodata";

export interface VideodataProps {}

export interface VideodataState {}

export class Videodata extends Transformer.Template<
  VideodataProps,
  VideodataState
> {
  constructor(
    props: VideodataProps & {
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
        mixed={VideodataData.mixed}
        elements={VideodataData.elements}
        attributes={VideodataData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Videodata, {
  path: `*[namespace-uri()='${VideodataData.namespace}' and local-name()='${VideodataData.localName}']`,
});
