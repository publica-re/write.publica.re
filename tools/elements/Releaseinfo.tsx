import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ReleaseinfoData from "../defs/Releaseinfo";

export { default as ReleaseinfoData } from "../defs/Releaseinfo";

export interface ReleaseinfoProps {}

export interface ReleaseinfoState {}

export class Releaseinfo extends Transformer.Template<
  ReleaseinfoProps,
  ReleaseinfoState
> {
  constructor(
    props: ReleaseinfoProps & {
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
        mixed={ReleaseinfoData.mixed}
        elements={ReleaseinfoData.elements}
        attributes={ReleaseinfoData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Releaseinfo, {
  path: `*[namespace-uri()='${ReleaseinfoData.namespace}' and local-name()='${ReleaseinfoData.localName}']`,
});
