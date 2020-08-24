import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ImagedataData from "../defs/Imagedata";

export { default as ImagedataData } from "../defs/Imagedata";

export interface ImagedataProps {}

export interface ImagedataState {}

export class Imagedata extends Transformer.Template<
  ImagedataProps,
  ImagedataState
> {
  constructor(
    props: ImagedataProps & {
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
        mixed={ImagedataData.mixed}
        elements={ImagedataData.elements}
        attributes={ImagedataData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Imagedata, {
  path: `*[namespace-uri()='${ImagedataData.namespace}' and local-name()='${ImagedataData.localName}']`,
});
