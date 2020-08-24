import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import SimplemsgentryData from "../defs/Simplemsgentry";

export { default as SimplemsgentryData } from "../defs/Simplemsgentry";

export interface SimplemsgentryProps {}

export interface SimplemsgentryState {}

export class Simplemsgentry extends Transformer.Template<
  SimplemsgentryProps,
  SimplemsgentryState
> {
  constructor(
    props: SimplemsgentryProps & {
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
        mixed={SimplemsgentryData.mixed}
        elements={SimplemsgentryData.elements}
        attributes={SimplemsgentryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Simplemsgentry, {
  path: `*[namespace-uri()='${SimplemsgentryData.namespace}' and local-name()='${SimplemsgentryData.localName}']`,
});
