import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import VideoobjectData from "../defs/Videoobject";

export { default as VideoobjectData } from "../defs/Videoobject";

export interface VideoobjectProps {}

export interface VideoobjectState {}

export class Videoobject extends Transformer.Template<
  VideoobjectProps,
  VideoobjectState
> {
  constructor(
    props: VideoobjectProps & {
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
        mixed={VideoobjectData.mixed}
        elements={VideoobjectData.elements}
        attributes={VideoobjectData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Videoobject, {
  path: `*[namespace-uri()='${VideoobjectData.namespace}' and local-name()='${VideoobjectData.localName}']`,
});
