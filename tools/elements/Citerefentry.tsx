import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CiterefentryData from "../defs/Citerefentry";

export { default as CiterefentryData } from "../defs/Citerefentry";

export interface CiterefentryProps {}

export interface CiterefentryState {}

export class Citerefentry extends Transformer.Template<
  CiterefentryProps,
  CiterefentryState
> {
  constructor(
    props: CiterefentryProps & {
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
        mixed={CiterefentryData.mixed}
        elements={CiterefentryData.elements}
        attributes={CiterefentryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Citerefentry, {
  path: `*[namespace-uri()='${CiterefentryData.namespace}' and local-name()='${CiterefentryData.localName}']`,
});
