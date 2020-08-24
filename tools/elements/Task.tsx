import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TaskData from "../defs/Task";

export { default as TaskData } from "../defs/Task";

export interface TaskProps {}

export interface TaskState {}

export class Task extends Transformer.Template<TaskProps, TaskState> {
  constructor(
    props: TaskProps & {
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
        mixed={TaskData.mixed}
        elements={TaskData.elements}
        attributes={TaskData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Task, {
  path: `*[namespace-uri()='${TaskData.namespace}' and local-name()='${TaskData.localName}']`,
});
