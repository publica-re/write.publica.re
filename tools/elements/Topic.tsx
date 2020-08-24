import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TopicData from "../defs/Topic";

export { default as TopicData } from "../defs/Topic";

export interface TopicProps {}

export interface TopicState {}

export class Topic extends Transformer.Template<TopicProps, TopicState> {
  constructor(
    props: TopicProps & {
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
        mixed={TopicData.mixed}
        elements={TopicData.elements}
        attributes={TopicData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Topic, {
  path: `*[namespace-uri()='${TopicData.namespace}' and local-name()='${TopicData.localName}']`,
});
