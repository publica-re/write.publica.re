import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TokenData from "../defs/Token";

export { default as TokenData } from "../defs/Token";

export interface TokenProps {}

export interface TokenState {}

export class Token extends Transformer.Template<TokenProps, TokenState> {
  constructor(
    props: TokenProps & {
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
        mixed={TokenData.mixed}
        elements={TokenData.elements}
        attributes={TokenData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Token, {
  path: `*[namespace-uri()='${TokenData.namespace}' and local-name()='${TokenData.localName}']`,
});
