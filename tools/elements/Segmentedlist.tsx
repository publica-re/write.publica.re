import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SegmentedlistData from "../defs/Segmentedlist";

export { default as SegmentedlistData } from "../defs/Segmentedlist";

export interface SegmentedlistProps {}

export interface SegmentedlistState {}

export class Segmentedlist extends Transformer.Template<
  SegmentedlistProps,
  SegmentedlistState
> {
  constructor(
    props: SegmentedlistProps & {
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
        mixed={SegmentedlistData.mixed}
        elements={SegmentedlistData.elements}
        attributes={SegmentedlistData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Segmentedlist, {
  path: `*[namespace-uri()='${SegmentedlistData.namespace}' and local-name()='${SegmentedlistData.localName}']`,
});
