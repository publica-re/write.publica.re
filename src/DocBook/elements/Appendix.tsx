import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AppendixData from "../defs/Appendix";

export { default as AppendixData } from "../defs/Appendix";

export interface AppendixProps {}

export interface AppendixState {}

export class Appendix extends Transformer.Template<
  AppendixProps,
  AppendixState
> {
  constructor(
    props: AppendixProps & {
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
        mixed={AppendixData.mixed}
        elements={AppendixData.elements}
        attributes={AppendixData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Appendix, {
  path: `*[namespace-uri()='${AppendixData.namespace}' and local-name()='${AppendixData.localName}']`,
});
