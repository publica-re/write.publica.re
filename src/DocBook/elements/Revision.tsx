import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RevisionData from "../defs/Revision";

export { default as RevisionData } from "../defs/Revision";

export interface RevisionProps {}

export interface RevisionState {}

export class Revision extends Transformer.Template<
  RevisionProps,
  RevisionState
> {
  constructor(
    props: RevisionProps & {
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
        mixed={RevisionData.mixed}
        elements={RevisionData.elements}
        attributes={RevisionData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Revision, {
  path: `*[namespace-uri()='${RevisionData.namespace}' and local-name()='${RevisionData.localName}']`,
});
