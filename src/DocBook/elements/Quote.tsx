import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import QuoteData from "../defs/Quote";

export { default as QuoteData } from "../defs/Quote";

export interface QuoteProps {}

export interface QuoteState {}

export class Quote extends Transformer.Template<QuoteProps, QuoteState> {
  constructor(
    props: QuoteProps & {
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
        mixed={QuoteData.mixed}
        elements={QuoteData.elements}
        attributes={QuoteData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Quote, {
  path: `*[namespace-uri()='${QuoteData.namespace}' and local-name()='${QuoteData.localName}']`,
});
