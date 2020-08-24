<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rng="http://relaxng.org/ns/structure/1.0" xmlns="http://relaxng.org/ns/structure/1.0" xmlns:a="http://relaxng.org/ns/compatibility/annotations/1.0" xmlns:fn="http://www.w3.org/2005/xpath-functions">
  <xsl:template match="rng:start" priority="9.0">
    <xsl:result-document href="defs/docbook/index.tsx" method="text"><xsl:apply-templates select="//rng:define" mode="gather-import" />

export default {
  nodes: [
<xsl:apply-templates select="//rng:define" mode="gather-export-name" />
  ],
  descriptions: {cd
<xsl:apply-templates select="//rng:define" mode="gather-export-description" />
  }
}
    </xsl:result-document>
  </xsl:template>

  <xsl:template match="rng:define">
    <xsl:variable name="name" select="fn:translate(@name, 'db.', '')" />
    <xsl:choose>
      <xsl:when test=".//rng:element">
        <xsl:result-document href="defs/docbook/elements/{$name}.tsx" method="text"><xsl:apply-templates /></xsl:result-document>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="rng:define" mode="gather-import"><xsl:if test=".//rng:element/@name"><xsl:variable name="name" select="fn:translate(@name, 'db.', '')" />import { nodeName as <xsl:value-of select="$name" />NodeName, nodeDescription as <xsl:value-of select="$name" />NodeDescription } from "./elements/<xsl:value-of select="$name" />";
</xsl:if></xsl:template>

  <xsl:template match="rng:define" mode="gather-export-name"><xsl:if test=".//rng:element/@name">   <xsl:value-of select="fn:translate(@name, 'db.', '')" />NodeName,
</xsl:if></xsl:template>

  <xsl:template match="rng:define" mode="gather-export-description"><xsl:if test=".//rng:element/@name">    <xsl:variable name="name" select="fn:translate(@name, 'db.', '')" /><xsl:value-of select="$name" />NodeName: <xsl:value-of select="$name" />NodeDescription,
</xsl:if></xsl:template>

  <xsl:template match="rng:element">import * as React from "react";
import ctx from "../../../context";
import Transformer from "@publica.re/react-xml-transformer";
import TransformUtils from "../../../../TransformUtils";

export const nodeName = "<xsl:choose>
  <xsl:when test="@name|./rng:name">*[local-name()='<xsl:value-of select="@name|./rng:name/text()" />']</xsl:when>
  <xsl:when test="./rng:anyName">*</xsl:when>
  <xsl:when test="./rng:nsName">*[namespace-uri()='<xsl:value-of select="./rng:nsName/@ns" />']</xsl:when>
  <xsl:otherwise>[UNKNOWN]</xsl:otherwise>
</xsl:choose>";
export const nodeDescription = `<xsl:value-of select="./a:documentation/text()" />`;
export const nodeChildren = [<xsl:apply-templates mode="aggregate-children" />];

export interface Props {}

export interface State {}

export class Template extends Transformer.Template&lt;Props, State&gt; {
  constructor(
    props: Props &amp; {
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
    return &lt;TransformUtils node={this.props.contextNode} emit={this.emit.bind(this)} nodes={nodeChildren}&gt;[{nodeName}]&lt;Transformer.ApplyTemplates {...this.ctx} select="<xsl:apply-templates mode="render-children" />*[local-name()='rescue-publicare-element']" /&gt;&lt;/TransformUtils&gt;
  }
}

ctx.register(Template, { path: nodeName });</xsl:template>

  <xsl:template match="rng:choice" mode="aggregate-children">{ type: "choice", options: [<xsl:apply-templates mode="aggregate-children" />] },</xsl:template>
  <xsl:template match="rng:zeroOrMore" mode="aggregate-children">{ type: "zeroOrMore", options: [<xsl:apply-templates mode="aggregate-children" />] },</xsl:template>
  <xsl:template match="rng:oneOrMore" mode="aggregate-children">{ type: "oneOrMore", options: [<xsl:apply-templates mode="aggregate-children" />] },</xsl:template>
  <xsl:template match="rng:optional" mode="aggregate-children">{ type: "optional", options: [<xsl:apply-templates mode="aggregate-children" />] },</xsl:template>
  <xsl:template match="rng:element" mode="aggregate-children">{ type: "element", name: "<xsl:value-of select="@name" />" },</xsl:template>
  <xsl:template match="rng:ref" mode="aggregate-children"><xsl:variable name="name" select="@name" /><xsl:apply-templates mode="aggregate-children" select="//rng:define[@name=$name]" /></xsl:template>
  <xsl:template match="rng:define" mode="aggregate-children"><xsl:apply-templates mode="aggregate-children"  /></xsl:template>
  <xsl:template match="rng:attribute" mode="aggregate-children">{ type: "attribute", name: "<xsl:value-of select="@name" />" },</xsl:template>
  <xsl:template match="text()" mode="aggregate-children" />

  <xsl:template match="rng:choice" mode="render-children"><xsl:apply-templates mode="render-children" /></xsl:template>
  <xsl:template match="rng:text" mode="render-children">text()|</xsl:template>
  <xsl:template match="rng:zeroOrMore" mode="render-children"><xsl:apply-templates mode="render-children" /></xsl:template>
  <xsl:template match="rng:oneOrMore" mode="render-children"><xsl:apply-templates mode="render-children" /></xsl:template>
  <xsl:template match="rng:optional" mode="render-children"><xsl:apply-templates mode="render-children" /></xsl:template>
  <xsl:template match="rng:element" mode="render-children">*[local-name()='<xsl:value-of select="@name" />']|</xsl:template>
  <xsl:template match="rng:ref" mode="render-children"><xsl:variable name="name" select="@name" /><xsl:apply-templates mode="render-children" select="//rng:define[@name=$name]" /></xsl:template>
  <xsl:template match="rng:define" mode="render-children"><xsl:apply-templates mode="render-children"  /></xsl:template>
  <xsl:template match="text()" mode="render-children" />



  <xsl:template match="/">
    <xsl:apply-templates />
  </xsl:template>
</xsl:stylesheet>