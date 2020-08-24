import * as React from "react";
import ctx from "./context";
import Transformer from "@publica.re/react-xml-transformer";

export interface Props {}

export interface State {}

export class Template extends Transformer.Template<Props, State> {
  constructor(
    props: Props & {
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
    return <Transformer.ApplyTemplates {...this.ctx} />;
  }
}

ctx.register(Template, { path: "/" });
