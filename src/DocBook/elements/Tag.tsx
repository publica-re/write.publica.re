import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TagData from "../defs/Tag";

export { default as TagData } from "../defs/Tag";

export interface TagProps {}

export interface TagState {}

export class Tag extends Transformer.Template<TagProps, TagState> {
  constructor(
    props: TagProps & {
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
        mixed={TagData.mixed}
        elements={TagData.elements}
        attributes={TagData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Tag, {
  path: `*[namespace-uri()='${TagData.namespace}' and local-name()='${TagData.localName}']`,
});
