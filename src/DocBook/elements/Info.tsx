import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import InfoData from "../defs/Info";

export { default as InfoData } from "../defs/Info";

export interface InfoProps {}

export interface InfoState {}

export class Info extends Transformer.Template<InfoProps, InfoState> {
  constructor(
    props: InfoProps & {
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
        mixed={InfoData.mixed}
        elements={InfoData.elements}
        attributes={InfoData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <header>
          <hgroup>
            <Transformer.ApplyTemplates
              {...this.ctx}
              select={`./*[namespace-uri()='${InfoData.namespace}' and local-name()='title']|../*[namespace-uri()='${InfoData.namespace}' and local-name()='title']`}
            />
            <Transformer.ApplyTemplates
              {...this.ctx}
              select={`./*[namespace-uri()='${InfoData.namespace}' and local-name()='subtitle']|../*[namespace-uri()='${InfoData.namespace}' and local-name()='subtitle']`}
            />
          </hgroup>
          <Transformer.ApplyTemplates
            {...this.ctx}
            select={`./*[namespace-uri()='${InfoData.namespace}' and (local-name()='title' or local-name()='subtitle')][last()]/following-sibling::*`}
          />
        </header>
      </Insert>
    );
  }
}

ctx.register(Info, {
  path: `*[namespace-uri()='${InfoData.namespace}' and local-name()='${InfoData.localName}']`,
});
