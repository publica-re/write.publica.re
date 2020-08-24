import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import MethodsynopsisData from "../defs/Methodsynopsis";

export { default as MethodsynopsisData } from "../defs/Methodsynopsis";

export interface MethodsynopsisProps {}

export interface MethodsynopsisState {}

export class Methodsynopsis extends Transformer.Template<
  MethodsynopsisProps,
  MethodsynopsisState
> {
  constructor(
    props: MethodsynopsisProps & {
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
        mixed={MethodsynopsisData.mixed}
        elements={MethodsynopsisData.elements}
        attributes={MethodsynopsisData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Methodsynopsis, {
  path: `*[namespace-uri()='${MethodsynopsisData.namespace}' and local-name()='${MethodsynopsisData.localName}']`,
});
