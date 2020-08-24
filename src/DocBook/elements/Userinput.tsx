import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import UserinputData from "../defs/Userinput";

export { default as UserinputData } from "../defs/Userinput";

export interface UserinputProps {}

export interface UserinputState {}

export class Userinput extends Transformer.Template<
  UserinputProps,
  UserinputState
> {
  constructor(
    props: UserinputProps & {
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
        mixed={UserinputData.mixed}
        elements={UserinputData.elements}
        attributes={UserinputData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Userinput, {
  path: `*[namespace-uri()='${UserinputData.namespace}' and local-name()='${UserinputData.localName}']`,
});
