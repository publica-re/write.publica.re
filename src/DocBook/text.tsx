import * as React from "react";
import bind from "bind-decorator";
import ctx from "./context";
import Transformer from "@publica.re/react-xml-transformer";

export interface Props {}

export interface State {}

export class Template extends Transformer.Template<Props, State> {
  private editorRef = React.createRef<HTMLSpanElement>();

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

  @bind
  async componentDidMount() {
    await super.componentDidMount();
    if (this.editorRef.current)
      this.editorRef.current.textContent = this.props.contextNode.textContent;
  }

  @bind
  async componentDidUpdate(prevProps: any) {
    if (
      prevProps.contextNode.textContent !== this.editorRef.current?.textContent
    ) {
      if (this.editorRef.current !== null) {
        this.editorRef.current.textContent =
          this.props.contextNode.textContent || "";
      }
    }
  }
  @bind
  triggerChanges() {
    this.props.contextNode.textContent =
      this.editorRef.current?.textContent || "";
    this.triggerChange();
  }

  render() {
    return (
      <span
        ref={this.editorRef}
        onKeyUp={this.triggerChanges}
        contentEditable={true}
        suppressContentEditableWarning={true}
      ></span>
    );
  }
}

ctx.register(Template, { path: "text()" });
