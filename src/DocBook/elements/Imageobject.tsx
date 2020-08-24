import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ImageobjectData from "../defs/Imageobject";

export { default as ImageobjectData } from "../defs/Imageobject";

export interface ImageobjectProps {}

export interface ImageobjectState {}

export class Imageobject extends Transformer.Template<
  ImageobjectProps,
  ImageobjectState
> {
  constructor(
    props: ImageobjectProps & {
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
        mixed={ImageobjectData.mixed}
        elements={ImageobjectData.elements}
        attributes={ImageobjectData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Imageobject, {
  path: `*[namespace-uri()='${ImageobjectData.namespace}' and local-name()='${ImageobjectData.localName}']`,
});
