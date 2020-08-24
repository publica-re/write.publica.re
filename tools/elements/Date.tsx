import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import DateData from "../defs/Date";

export { default as DateData } from "../defs/Date";

export interface DateProps {}

export interface DateState {}

export class Date extends Transformer.Template<DateProps, DateState> {
  constructor(
    props: DateProps & {
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
        mixed={DateData.mixed}
        elements={DateData.elements}
        attributes={DateData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Date, {
  path: `*[namespace-uri()='${DateData.namespace}' and local-name()='${DateData.localName}']`,
});
