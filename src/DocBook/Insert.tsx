import React from "react";
import bind from "bind-decorator";
import "./Insert.sass";

export interface AppProps {
  mixed: boolean;
  elements?: object;
  attributes: object;
  node: Node;
  emit: (name: string, ...args: any[]) => void;
  children?: React.ReactNode;
}

export interface AppState {}

export default class TransformUtils extends React.Component<
  AppProps,
  AppState
> {
  @bind
  makeElements(): object[] {
    const helper = (obj: any) => {
      if (obj.type && obj.type === "sequence") {
        return obj.children.flatMap(helper);
      } else if (obj.type && obj.type === "choice") {
        return obj.children.flatMap(helper);
      } else if (obj.type && obj.type === "element") {
        return [obj];
      }
      console.log(obj);
    };
    const rtr = helper(this.props.elements);
    return rtr;
  }

  @bind
  handleClick(): void {
    this.props.emit("r4:render", {
      node: this.props.node,
      elements: this.makeElements(),
      attributes: this.props.attributes,
    });
  }

  render() {
    return (
      <div
        className="insert-tool"
        onMouseUp={this.handleClick}
        data-node={this.props.node.nodeName}
      >
        {this.props.children}
      </div>
    );
  }
}
