import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ImageobjectcoData from "../defs/Imageobjectco";

export { default as ImageobjectcoData } from "../defs/Imageobjectco";

export interface ImageobjectcoProps {}

export interface ImageobjectcoState {}

export class Imageobjectco extends Transformer.Template<
  ImageobjectcoProps,
  ImageobjectcoState
> {
  constructor(
    props: ImageobjectcoProps & {
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
        mixed={ImageobjectcoData.mixed}
        elements={ImageobjectcoData.elements}
        attributes={ImageobjectcoData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Imageobjectco, {
  path: `*[namespace-uri()='${ImageobjectcoData.namespace}' and local-name()='${ImageobjectcoData.localName}']`,
});
