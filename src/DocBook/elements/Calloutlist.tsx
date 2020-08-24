import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CalloutlistData from "../defs/Calloutlist";

export { default as CalloutlistData } from "../defs/Calloutlist";

export interface CalloutlistProps {}

export interface CalloutlistState {}

export class Calloutlist extends Transformer.Template<
  CalloutlistProps,
  CalloutlistState
> {
  constructor(
    props: CalloutlistProps & {
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
        mixed={CalloutlistData.mixed}
        elements={CalloutlistData.elements}
        attributes={CalloutlistData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Calloutlist, {
  path: `*[namespace-uri()='${CalloutlistData.namespace}' and local-name()='${CalloutlistData.localName}']`,
});
