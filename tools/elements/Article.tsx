import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ArticleData from "../defs/Article";

export { default as ArticleData } from "../defs/Article";

export interface ArticleProps {}

export interface ArticleState {}

export class Article extends Transformer.Template<ArticleProps, ArticleState> {
  constructor(
    props: ArticleProps & {
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
        mixed={ArticleData.mixed}
        elements={ArticleData.elements}
        attributes={ArticleData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Article, {
  path: `*[namespace-uri()='${ArticleData.namespace}' and local-name()='${ArticleData.localName}']`,
});
