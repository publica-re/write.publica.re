import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import TaskprerequisitesData from "../defs/Taskprerequisites";

export { default as TaskprerequisitesData } from "../defs/Taskprerequisites";

export interface TaskprerequisitesProps {}

export interface TaskprerequisitesState {}

export class Taskprerequisites extends Transformer.Template<
  TaskprerequisitesProps,
  TaskprerequisitesState
> {
  constructor(
    props: TaskprerequisitesProps & {
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
        mixed={TaskprerequisitesData.mixed}
        elements={TaskprerequisitesData.elements}
        attributes={TaskprerequisitesData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Taskprerequisites, {
  path: `*[namespace-uri()='${TaskprerequisitesData.namespace}' and local-name()='${TaskprerequisitesData.localName}']`,
});
