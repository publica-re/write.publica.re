import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CommandData from "../defs/Command";

export { default as CommandData } from "../defs/Command";

export interface CommandProps {}

export interface CommandState {}

export class Command extends Transformer.Template<CommandProps, CommandState> {
  constructor(
    props: CommandProps & {
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
        mixed={CommandData.mixed}
        elements={CommandData.elements}
        attributes={CommandData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Command, {
  path: `*[namespace-uri()='${CommandData.namespace}' and local-name()='${CommandData.localName}']`,
});
