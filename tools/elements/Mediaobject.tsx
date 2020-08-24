import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MediaobjectData from "../defs/Mediaobject";

export { default as MediaobjectData } from "../defs/Mediaobject";

export interface MediaobjectProps {}

export interface MediaobjectState {}

export class Mediaobject extends Transformer.Template<
  MediaobjectProps,
  MediaobjectState
> {
  constructor(
    props: MediaobjectProps & {
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
        mixed={MediaobjectData.mixed}
        elements={MediaobjectData.elements}
        attributes={MediaobjectData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Mediaobject, {
  path: `*[namespace-uri()='${MediaobjectData.namespace}' and local-name()='${MediaobjectData.localName}']`,
});
