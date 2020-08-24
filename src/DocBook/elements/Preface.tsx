import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PrefaceData from "../defs/Preface";

export { default as PrefaceData } from "../defs/Preface";

export interface PrefaceProps {}

export interface PrefaceState {}

export class Preface extends Transformer.Template<PrefaceProps, PrefaceState> {
  constructor(
    props: PrefaceProps & {
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
        mixed={PrefaceData.mixed}
        elements={PrefaceData.elements}
        attributes={PrefaceData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Preface, {
  path: `*[namespace-uri()='${PrefaceData.namespace}' and local-name()='${PrefaceData.localName}']`,
});
