import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import PostcodeData from "../defs/Postcode";

export { default as PostcodeData } from "../defs/Postcode";

export interface PostcodeProps {}

export interface PostcodeState {}

export class Postcode extends Transformer.Template<
  PostcodeProps,
  PostcodeState
> {
  constructor(
    props: PostcodeProps & {
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
        mixed={PostcodeData.mixed}
        elements={PostcodeData.elements}
        attributes={PostcodeData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Postcode, {
  path: `*[namespace-uri()='${PostcodeData.namespace}' and local-name()='${PostcodeData.localName}']`,
});
