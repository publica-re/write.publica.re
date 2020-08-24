import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RevdescriptionData from "../defs/Revdescription";

export { default as RevdescriptionData } from "../defs/Revdescription";

export interface RevdescriptionProps {}

export interface RevdescriptionState {}

export class Revdescription extends Transformer.Template<
  RevdescriptionProps,
  RevdescriptionState
> {
  constructor(
    props: RevdescriptionProps & {
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
        mixed={RevdescriptionData.mixed}
        elements={RevdescriptionData.elements}
        attributes={RevdescriptionData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Revdescription, {
  path: `*[namespace-uri()='${RevdescriptionData.namespace}' and local-name()='${RevdescriptionData.localName}']`,
});
