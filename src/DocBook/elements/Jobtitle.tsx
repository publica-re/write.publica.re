import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import JobtitleData from "../defs/Jobtitle";

export { default as JobtitleData } from "../defs/Jobtitle";

export interface JobtitleProps {}

export interface JobtitleState {}

export class Jobtitle extends Transformer.Template<
  JobtitleProps,
  JobtitleState
> {
  constructor(
    props: JobtitleProps & {
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
        mixed={JobtitleData.mixed}
        elements={JobtitleData.elements}
        attributes={JobtitleData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Jobtitle, {
  path: `*[namespace-uri()='${JobtitleData.namespace}' and local-name()='${JobtitleData.localName}']`,
});
