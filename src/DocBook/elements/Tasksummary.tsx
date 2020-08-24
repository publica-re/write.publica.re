import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TasksummaryData from "../defs/Tasksummary";

export { default as TasksummaryData } from "../defs/Tasksummary";

export interface TasksummaryProps {}

export interface TasksummaryState {}

export class Tasksummary extends Transformer.Template<
  TasksummaryProps,
  TasksummaryState
> {
  constructor(
    props: TasksummaryProps & {
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
        mixed={TasksummaryData.mixed}
        elements={TasksummaryData.elements}
        attributes={TasksummaryData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
        ...
      </Insert>
    );
  }
}

ctx.register(Tasksummary, {
  path: `*[namespace-uri()='${TasksummaryData.namespace}' and local-name()='${TasksummaryData.localName}']`,
});
