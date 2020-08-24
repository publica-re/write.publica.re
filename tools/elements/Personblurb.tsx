import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PersonblurbData from "../defs/Personblurb";

export { default as PersonblurbData } from "../defs/Personblurb";

export interface PersonblurbProps {}

export interface PersonblurbState {}

export class Personblurb extends Transformer.Template<
  PersonblurbProps,
  PersonblurbState
> {
  constructor(
    props: PersonblurbProps & {
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
        mixed={PersonblurbData.mixed}
        elements={PersonblurbData.elements}
        attributes={PersonblurbData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Personblurb, {
  path: `*[namespace-uri()='${PersonblurbData.namespace}' and local-name()='${PersonblurbData.localName}']`,
});
