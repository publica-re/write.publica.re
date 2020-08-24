import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ErrorcodeData from "../defs/Errorcode";

export { default as ErrorcodeData } from "../defs/Errorcode";

export interface ErrorcodeProps {}

export interface ErrorcodeState {}

export class Errorcode extends Transformer.Template<
  ErrorcodeProps,
  ErrorcodeState
> {
  constructor(
    props: ErrorcodeProps & {
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
        mixed={ErrorcodeData.mixed}
        elements={ErrorcodeData.elements}
        attributes={ErrorcodeData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Errorcode, {
  path: `*[namespace-uri()='${ErrorcodeData.namespace}' and local-name()='${ErrorcodeData.localName}']`,
});
