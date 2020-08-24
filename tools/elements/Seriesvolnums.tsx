import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SeriesvolnumsData from "../defs/Seriesvolnums";

export { default as SeriesvolnumsData } from "../defs/Seriesvolnums";

export interface SeriesvolnumsProps {}

export interface SeriesvolnumsState {}

export class Seriesvolnums extends Transformer.Template<
  SeriesvolnumsProps,
  SeriesvolnumsState
> {
  constructor(
    props: SeriesvolnumsProps & {
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
        mixed={SeriesvolnumsData.mixed}
        elements={SeriesvolnumsData.elements}
        attributes={SeriesvolnumsData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Seriesvolnums, {
  path: `*[namespace-uri()='${SeriesvolnumsData.namespace}' and local-name()='${SeriesvolnumsData.localName}']`,
});
