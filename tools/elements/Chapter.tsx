import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ChapterData from "../defs/Chapter";

export { default as ChapterData } from "../defs/Chapter";

export interface ChapterProps {}

export interface ChapterState {}

export class Chapter extends Transformer.Template<ChapterProps, ChapterState> {
  constructor(
    props: ChapterProps & {
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
        mixed={ChapterData.mixed}
        elements={ChapterData.elements}
        attributes={ChapterData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Chapter, {
  path: `*[namespace-uri()='${ChapterData.namespace}' and local-name()='${ChapterData.localName}']`,
});
