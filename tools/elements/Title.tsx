import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TitleData from "../defs/Title";

export { default as TitleData } from "../defs/Title";

export interface TitleProps {}

export interface TitleState {}

export class Title extends Transformer.Template<TitleProps, TitleState> {
  constructor(
    props: TitleProps & {
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
        mixed={TitleData.mixed}
        elements={TitleData.elements}
        attributes={TitleData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Title, {
  path: `*[namespace-uri()='${TitleData.namespace}' and local-name()='${TitleData.localName}']`,
});
