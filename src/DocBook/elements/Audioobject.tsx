import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AudioobjectData from "../defs/Audioobject";

export { default as AudioobjectData } from "../defs/Audioobject";

export interface AudioobjectProps {}

export interface AudioobjectState {}

export class Audioobject extends Transformer.Template<
  AudioobjectProps,
  AudioobjectState
> {
  constructor(
    props: AudioobjectProps & {
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
        mixed={AudioobjectData.mixed}
        elements={AudioobjectData.elements}
        attributes={AudioobjectData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Audioobject, {
  path: `*[namespace-uri()='${AudioobjectData.namespace}' and local-name()='${AudioobjectData.localName}']`,
});
