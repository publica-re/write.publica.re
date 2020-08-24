import * as React from "react";
import ctx from "../context";
import Insert from "../Insert";
import Transformer from "@publica.re/react-xml-transformer";
import BookData from "../defs/Book";

export { default as BookData } from "../defs/Book";

export interface BookProps {}

export interface BookState {}

export class Book extends Transformer.Template<BookProps, BookState> {
  constructor(
    props: BookProps & {
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
        mixed={BookData.mixed}
        elements={BookData.elements}
        attributes={BookData.attributes}
        node={this.props.contextNode}
        emit={this.emit.bind(this)}
      >
        <Transformer.ApplyTemplates {...this.ctx} />
      </Insert>
    );
  }
}

ctx.register(Book, {
  path: `*[namespace-uri()='${BookData.namespace}' and local-name()='${BookData.localName}']`,
});
