import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import ApplicationData from "../defs/Application";

export { default as ApplicationData } from "../defs/Application";

export interface ApplicationProps {}

export interface ApplicationState {}

export class Application extends Transformer.Template<
  ApplicationProps,
  ApplicationState
> {
  constructor(
    props: ApplicationProps & {
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
        mixed={ApplicationData.mixed}
        elements={ApplicationData.elements}
        attributes={ApplicationData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Application, {
  path: `*[namespace-uri()='${ApplicationData.namespace}' and local-name()='${ApplicationData.localName}']`,
});
