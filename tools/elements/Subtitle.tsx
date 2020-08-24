import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SubtitleData from "../defs/Subtitle";

export { default as SubtitleData } from "../defs/Subtitle";

export interface SubtitleProps {}

export interface SubtitleState {}

export class Subtitle extends Transformer.Template<
  SubtitleProps,
  SubtitleState
> {
  constructor(
    props: SubtitleProps & {
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
        mixed={SubtitleData.mixed}
        elements={SubtitleData.elements}
        attributes={SubtitleData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Subtitle, {
  path: `*[namespace-uri()='${SubtitleData.namespace}' and local-name()='${SubtitleData.localName}']`,
});
