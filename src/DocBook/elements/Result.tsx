import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ResultData from "../defs/Result";

export { default as ResultData } from "../defs/Result";

export interface ResultProps {}

export interface ResultState {}

export class Result extends Transformer.Template<ResultProps, ResultState> {
  constructor(
    props: ResultProps & {
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
        mixed={ResultData.mixed}
        elements={ResultData.elements}
        attributes={ResultData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Result, {
  path: `*[namespace-uri()='${ResultData.namespace}' and local-name()='${ResultData.localName}']`,
});
