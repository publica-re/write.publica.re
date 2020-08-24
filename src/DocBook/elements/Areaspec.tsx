import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import AreaspecData from "../defs/Areaspec";

export { default as AreaspecData } from "../defs/Areaspec";

export interface AreaspecProps {}

export interface AreaspecState {}

export class Areaspec extends Transformer.Template<
  AreaspecProps,
  AreaspecState
> {
  constructor(
    props: AreaspecProps & {
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
        mixed={AreaspecData.mixed}
        elements={AreaspecData.elements}
        attributes={AreaspecData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Areaspec, {
  path: `*[namespace-uri()='${AreaspecData.namespace}' and local-name()='${AreaspecData.localName}']`,
});
