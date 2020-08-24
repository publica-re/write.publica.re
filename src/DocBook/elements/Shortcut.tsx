import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ShortcutData from "../defs/Shortcut";

export { default as ShortcutData } from "../defs/Shortcut";

export interface ShortcutProps {}

export interface ShortcutState {}

export class Shortcut extends Transformer.Template<
  ShortcutProps,
  ShortcutState
> {
  constructor(
    props: ShortcutProps & {
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
        mixed={ShortcutData.mixed}
        elements={ShortcutData.elements}
        attributes={ShortcutData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Shortcut, {
  path: `*[namespace-uri()='${ShortcutData.namespace}' and local-name()='${ShortcutData.localName}']`,
});
