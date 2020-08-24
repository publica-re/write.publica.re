import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import IssuenumData from "../defs/Issuenum";

export { default as IssuenumData } from "../defs/Issuenum";

export interface IssuenumProps {}

export interface IssuenumState {}

export class Issuenum extends Transformer.Template<
  IssuenumProps,
  IssuenumState
> {
  constructor(
    props: IssuenumProps & {
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
        mixed={IssuenumData.mixed}
        elements={IssuenumData.elements}
        attributes={IssuenumData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Issuenum, {
  path: `*[namespace-uri()='${IssuenumData.namespace}' and local-name()='${IssuenumData.localName}']`,
});
