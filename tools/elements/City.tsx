import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CityData from "../defs/City";

export { default as CityData } from "../defs/City";

export interface CityProps {}

export interface CityState {}

export class City extends Transformer.Template<CityProps, CityState> {
  constructor(
    props: CityProps & {
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
        mixed={CityData.mixed}
        elements={CityData.elements}
        attributes={CityData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(City, {
  path: `*[namespace-uri()='${CityData.namespace}' and local-name()='${CityData.localName}']`,
});
