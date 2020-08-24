import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import YearData from "../defs/Year";

export { default as YearData } from "../defs/Year";

export interface YearProps {}

export interface YearState {}

export class Year extends Transformer.Template<YearProps, YearState> {
  constructor(
    props: YearProps & {
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
        mixed={YearData.mixed}
        elements={YearData.elements}
        attributes={YearData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Year, {
  path: `*[namespace-uri()='${YearData.namespace}' and local-name()='${YearData.localName}']`,
});
