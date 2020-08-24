import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import FilenameData from "../defs/Filename";

export { default as FilenameData } from "../defs/Filename";

export interface FilenameProps {}

export interface FilenameState {}

export class Filename extends Transformer.Template<
  FilenameProps,
  FilenameState
> {
  constructor(
    props: FilenameProps & {
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
        mixed={FilenameData.mixed}
        elements={FilenameData.elements}
        attributes={FilenameData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Filename, {
  path: `*[namespace-uri()='${FilenameData.namespace}' and local-name()='${FilenameData.localName}']`,
});
