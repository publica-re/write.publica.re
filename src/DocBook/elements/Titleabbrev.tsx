import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TitleabbrevData from "../defs/Titleabbrev";

export { default as TitleabbrevData } from "../defs/Titleabbrev";

export interface TitleabbrevProps {}

export interface TitleabbrevState {}

export class Titleabbrev extends Transformer.Template<
  TitleabbrevProps,
  TitleabbrevState
> {
  constructor(
    props: TitleabbrevProps & {
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
        mixed={TitleabbrevData.mixed}
        elements={TitleabbrevData.elements}
        attributes={TitleabbrevData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Titleabbrev, {
  path: `*[namespace-uri()='${TitleabbrevData.namespace}' and local-name()='${TitleabbrevData.localName}']`,
});
