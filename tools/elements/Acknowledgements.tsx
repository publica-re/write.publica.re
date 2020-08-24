import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AcknowledgementsData from "../defs/Acknowledgements";

export { default as AcknowledgementsData } from "../defs/Acknowledgements";

export interface AcknowledgementsProps {}

export interface AcknowledgementsState {}

export class Acknowledgements extends Transformer.Template<
  AcknowledgementsProps,
  AcknowledgementsState
> {
  constructor(
    props: AcknowledgementsProps & {
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
        mixed={AcknowledgementsData.mixed}
        elements={AcknowledgementsData.elements}
        attributes={AcknowledgementsData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Acknowledgements, {
  path: `*[namespace-uri()='${AcknowledgementsData.namespace}' and local-name()='${AcknowledgementsData.localName}']`,
});
