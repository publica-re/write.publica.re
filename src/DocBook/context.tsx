import * as React from "react";
import Transformer from "@publica.re/react-xml-transformer";

const ctx = new Transformer.Context();

ctx.notFoundTemplateNode = (node: Node) => (
  <span style={{ backgroundColor: "red", color: "white" }}>
    {node.nodeName} could not be found
  </span>
);

export default ctx;
