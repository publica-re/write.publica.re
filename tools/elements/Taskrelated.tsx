import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TaskrelatedData from "../defs/Taskrelated";

export { default as TaskrelatedData } from "../defs/Taskrelated";

export interface TaskrelatedProps {}

export interface TaskrelatedState {}

export class Taskrelated extends Transformer.Template<
  TaskrelatedProps,
  TaskrelatedState
> {
  constructor(
    props: TaskrelatedProps & {
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
        mixed={TaskrelatedData.mixed}
        elements={TaskrelatedData.elements}
        attributes={TaskrelatedData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Taskrelated, {
  path: `*[namespace-uri()='${TaskrelatedData.namespace}' and local-name()='${TaskrelatedData.localName}']`,
});
