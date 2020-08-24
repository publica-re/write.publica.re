import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AudiodataData from "../defs/Audiodata";

export { default as AudiodataData } from "../defs/Audiodata";

export interface AudiodataProps {}

export interface AudiodataState {}

export class Audiodata extends Transformer.Template<
  AudiodataProps,
  AudiodataState
> {
  constructor(
    props: AudiodataProps & {
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
        mixed={AudiodataData.mixed}
        elements={AudiodataData.elements}
        attributes={AudiodataData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Audiodata, {
  path: `*[namespace-uri()='${AudiodataData.namespace}' and local-name()='${AudiodataData.localName}']`,
});
