import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import CountryData from "../defs/Country";

export { default as CountryData } from "../defs/Country";

export interface CountryProps {}

export interface CountryState {}

export class Country extends Transformer.Template<CountryProps, CountryState> {
  constructor(
    props: CountryProps & {
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
        mixed={CountryData.mixed}
        elements={CountryData.elements}
        attributes={CountryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Country, {
  path: `*[namespace-uri()='${CountryData.namespace}' and local-name()='${CountryData.localName}']`,
});
