import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import RevnumberData from "../defs/Revnumber";

export { default as RevnumberData } from "../defs/Revnumber";

export interface RevnumberProps {}

export interface RevnumberState {}

export class Revnumber extends Transformer.Template<
  RevnumberProps,
  RevnumberState
> {
  constructor(
    props: RevnumberProps & {
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
        mixed={RevnumberData.mixed}
        elements={RevnumberData.elements}
        attributes={RevnumberData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Revnumber, {
  path: `*[namespace-uri()='${RevnumberData.namespace}' and local-name()='${RevnumberData.localName}']`,
});
