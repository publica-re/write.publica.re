import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PubdateData from "../defs/Pubdate";

export { default as PubdateData } from "../defs/Pubdate";

export interface PubdateProps {}

export interface PubdateState {}

export class Pubdate extends Transformer.Template<PubdateProps, PubdateState> {
  constructor(
    props: PubdateProps & {
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
        mixed={PubdateData.mixed}
        elements={PubdateData.elements}
        attributes={PubdateData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Pubdate, {
  path: `*[namespace-uri()='${PubdateData.namespace}' and local-name()='${PubdateData.localName}']`,
});
