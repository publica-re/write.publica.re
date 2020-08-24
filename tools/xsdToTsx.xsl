<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:rng="http://relaxng.org/ns/structure/1.0" xmlns:a="http://relaxng.org/ns/compatibility/annotations/1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:my="https://publica.re/defs/my" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:fn="http://www.w3.org/2005/xpath-functions">
  <xsl:output method="text" />
  <xsl:param name="prefix" select="'db:'" />
  <xsl:param name="namespace" select="/xs:schema/@targetNamespace" />
  <xsl:param name="context" select="'../context'" />
  <xsl:param name="utils" select="'../Insert'" />

  <xsl:function name="my:capitalize" as="xs:string*">
    <xsl:param name="str" as="xs:string*" />
    <xsl:sequence select="concat(upper-case(substring($str, 1, 1)), substring($str, 2))" />
  </xsl:function>

  <xsl:template match="/">
    <xsl:apply-templates select="//xs:element[@name or not(fn:starts-with(@type, 'xs'))]" />
    <xsl:result-document href="elements/index.ts" method="text"><xsl:apply-templates select="//xs:element[@name]" mode="render-index" /></xsl:result-document>
  </xsl:template>

  <xsl:template match="//xs:element[@name and not(@type)]">
    <xsl:variable name="name-divider"><xsl:if test="count(preceding::xs:element[@name=current()/@name]) > 0">.<xsl:value-of select="count(preceding::xs:element[@name=current()/@name])" /></xsl:if></xsl:variable>
    <xsl:result-document href="defs/{my:capitalize(@name)}{$name-divider}.ts" method="text">const unbounded = NaN;
export default <xsl:apply-templates mode="elements"><xsl:with-param name="element-name" select="@name" /></xsl:apply-templates></xsl:result-document>
    <xsl:apply-templates select="." mode="render-file" />
  </xsl:template>

  <xsl:template match="//xs:element[@name and @type]">
    <xsl:variable name="name-divider"><xsl:if test="count(preceding::xs:element[@name=current()/@name]) > 0">.<xsl:value-of select="count(preceding::xs:element[@name=current()/@name])" /></xsl:if></xsl:variable>
    <xsl:result-document href="defs/{my:capitalize(@name)}{$name-divider}.ts" method="text">const unbounded = NaN;
export default <xsl:apply-templates select="//*[(name(.)='xs:simpleType' or name(.)='xs:complexType') and concat($prefix,@name)=current()/@type]" mode="elements"><xsl:with-param name="element-name" select="@name" /></xsl:apply-templates></xsl:result-document>
    <xsl:apply-templates select="." mode="render-file" />
  </xsl:template>

  <xsl:template match="//xs:element[@name]" mode="render-index">
    <xsl:variable name="name-divider"><xsl:if test="count(preceding::xs:element[@name=current()/@name]) > 0">.<xsl:value-of select="count(preceding::xs:element[@name=current()/@name])" /></xsl:if></xsl:variable>
import "./<xsl:value-of select="concat(my:capitalize(@name),$name-divider)" />";
  </xsl:template>


  <xsl:template match="//xs:element[@name]" mode="render-file">
    <xsl:variable name="name-divider"><xsl:if test="count(preceding::xs:element[@name=current()/@name]) > 0">.<xsl:value-of select="count(preceding::xs:element[@name=current()/@name])" /></xsl:if></xsl:variable>
    <xsl:result-document href="elements/{my:capitalize(@name)}{$name-divider}.tsx" method="text">
import * as React from "react";
import ctx from "<xsl:value-of select="$context" />";
import Insert from "<xsl:value-of select="$utils" />";
import Transformer from "@publica.re/react-xml-transformer";
import <xsl:value-of select="my:capitalize(@name)" />Data from "../defs/<xsl:value-of select="concat(my:capitalize(@name),$name-divider)" />";

export { default as <xsl:value-of select="my:capitalize(@name)" />Data } from "../defs/<xsl:value-of select="concat(my:capitalize(@name),$name-divider)" />";

export interface <xsl:value-of select="my:capitalize(@name)" />Props {};

export interface <xsl:value-of select="my:capitalize(@name)" />State {};

export class <xsl:value-of select="my:capitalize(@name)" /> extends Transformer.Template&lt;<xsl:value-of select="my:capitalize(@name)" />Props, <xsl:value-of select="my:capitalize(@name)" />State&gt; {
  constructor(
    props: <xsl:value-of select="my:capitalize(@name)" />Props &amp; {
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
      &lt;Insert
            mixed={<xsl:value-of select="my:capitalize(@name)" />Data.mixed}
            elements={<xsl:value-of select="my:capitalize(@name)" />Data.elements}
            attributes={<xsl:value-of select="my:capitalize(@name)" />Data.attributes}
            node={this.props.contextNode}
            emit={this.emit.bind(this)}&gt;
        <Transformer.ApplyTemplates {...this.ctx} />
      &lt;/Insert&gt;
    );
  }
}

ctx.register(
  <xsl:value-of select="my:capitalize(@name)" />,
  { path:
    `*[namespace-uri()='${<xsl:value-of select="my:capitalize(@name)" />Data.namespace}' and local-name()='${<xsl:value-of select="my:capitalize(@name)" />Data.localName}']`
  }
);</xsl:result-document>
  </xsl:template>


  <xsl:template match="xs:complexType" mode="elements elements-parent-sequence elements-parent-choice"><xsl:param name="element-name" />
{
  namespace: "<xsl:value-of select="$namespace" />",
  localName: "<xsl:value-of select="$element-name" />",
  documentation: "<xsl:value-of select="normalize-space(document('docbook.rng')//rng:element[@name=$element-name]//a:documentation/text())" />",
  mixed: <xsl:value-of select="(@mixed, 'false')[1]" />,
  attributes: [<xsl:apply-templates mode="elements-attributes" />],
  elements: <xsl:choose><xsl:when test="fn:exists(./*[not(self::xs:attribute) and not(self::xs:attributeGroup)])"><xsl:apply-templates mode="elements" /></xsl:when><xsl:otherwise>undefined</xsl:otherwise></xsl:choose>
}
  </xsl:template>

  <xsl:template match="xs:sequence" mode="elements elements-parent-choice">
    <xsl:param name="maxOccurs" select="@maxOccurs" />
    <xsl:param name="minOccurs" select="@minOccurs" />
    <xsl:choose>
      <xsl:when test="count(./*)=1 and not(fn:exists(./xs:group))"><xsl:apply-templates mode="elements">
    <xsl:with-param name="maxOccurs" select="@maxOccurs|$maxOccurs" />
    <xsl:with-param name="minOccurs" select="@minOccurs|$minOccurs" />
  </xsl:apply-templates></xsl:when>
      <xsl:otherwise>
{
  type: "sequence",
  children: [<xsl:apply-templates mode="elements" />],
  occurs: {
    max: <xsl:value-of select="(@maxOccurs|$maxOccurs, 1)[1]" />,
    min: <xsl:value-of select="(@minOccurs|$minOccurs, 1)[1]" />,
  },
},</xsl:otherwise></xsl:choose></xsl:template>

  <xsl:template match="xs:sequence" mode="elements-parent-sequence">
    <xsl:param name="maxOccurs" select="@maxOccurs" />
    <xsl:param name="minOccurs" select="@minOccurs" />
    <xsl:apply-templates mode="elements">
    <xsl:with-param name="maxOccurs" select="@maxOccurs|$maxOccurs" />
    <xsl:with-param name="minOccurs" select="@minOccurs|$minOccurs" />
  </xsl:apply-templates>
  </xsl:template>

  <xsl:template match="xs:choice" mode="elements elements-parent-sequence">
    <xsl:param name="maxOccurs" select="@maxOccurs" />
    <xsl:param name="minOccurs" select="@minOccurs" />
    <xsl:choose>
      <xsl:when test="count(./*)=1 and not(fn:exists(./xs:group))"><xsl:apply-templates mode="elements">
    <xsl:with-param name="maxOccurs" select="@maxOccurs|$maxOccurs" />
    <xsl:with-param name="minOccurs" select="@minOccurs|$minOccurs" />
  </xsl:apply-templates></xsl:when>
      <xsl:otherwise>
{
  type: "choice",
  children: [<xsl:apply-templates mode="elements" />],
  occurs: {
    max: <xsl:value-of select="(@maxOccurs|$maxOccurs, 1)[1]" />,
    min: <xsl:value-of select="(@minOccurs|$minOccurs, 1)[1]" />,
  },
},</xsl:otherwise></xsl:choose></xsl:template>

  <xsl:template match="xs:choice" mode="elements-parent-choice">
    <xsl:param name="maxOccurs" select="@maxOccurs" />
    <xsl:param name="minOccurs" select="@minOccurs" />
    <xsl:apply-templates mode="elements">
    <xsl:with-param name="maxOccurs" select="@maxOccurs|$maxOccurs" />
    <xsl:with-param name="minOccurs" select="@minOccurs|$minOccurs" />
  </xsl:apply-templates>
  </xsl:template>

  <xsl:template match="xs:element[@ref]" mode="elements elements-parent-sequence elements-parent-choice">
    <xsl:param name="maxOccurs" select="@maxOccurs" />
    <xsl:param name="minOccurs" select="@minOccurs" />
<xsl:apply-templates select="//xs:element[concat($prefix,@name)=current()/@ref]" mode="elements">
    <xsl:with-param name="maxOccurs" select="@maxOccurs|$maxOccurs" />
    <xsl:with-param name="minOccurs" select="@minOccurs|$minOccurs" />
  </xsl:apply-templates>
  </xsl:template>

  <xsl:template match="xs:element[@name]" mode="elements elements-parent-sequence elements-parent-choice">
    <xsl:param name="maxOccurs" select="@maxOccurs" />
    <xsl:param name="minOccurs" select="@minOccurs" />{
  type: "element",
  namespace: "<xsl:value-of select="$namespace" />",
  localName: "<xsl:value-of select="./@name" />",
  documentation: "<xsl:value-of select="normalize-space(document('docbook.rng')//rng:element[@name=current()/@name]//a:documentation/text())" />",
  minOccurs: <xsl:value-of select="(@minOccurs|$minOccurs, 1)[1]" />,
  maxOccurs: <xsl:value-of select="(@maxOccurs|$maxOccurs, 1)[1]" />
},
  </xsl:template>

  <xsl:template match="xs:group[@ref]" mode="elements elements-parent-sequence elements-parent-choice">
    <xsl:param name="maxOccurs" select="@maxOccurs" />
    <xsl:param name="minOccurs" select="@minOccurs" />
    <xsl:variable name="target-node" select="//xs:group[concat($prefix,@name)=current()/@ref]" />
    <xsl:variable name="target-substitute" select="//xs:group[concat($prefix,@substituteGroup)=current()/@ref]" />
    <xsl:choose>
      <xsl:when test="count($target-substitute) > 0">
{
  type: "group",
  children: [<xsl:apply-templates select="$target-substitute">
    <xsl:with-param name="maxOccurs" select="@maxOccurs|$maxOccurs" />
    <xsl:with-param name="minOccurs" select="@minOccurs|$minOccurs" />
  </xsl:apply-templates>],
  occurs: {
    max: <xsl:value-of select="(@maxOccurs|$maxOccurs, 1)[1]" />,
    min: <xsl:value-of select="(@minOccurs|$minOccurs, 1)[1]" />,
  },
},
      </xsl:when>
      <xsl:when test="name(..)='xs:sequence'">
        <xsl:apply-templates select="$target-node" mode="elements-parent-sequence">
    <xsl:with-param name="maxOccurs" select="@maxOccurs|$maxOccurs" />
    <xsl:with-param name="minOccurs" select="@minOccurs|$minOccurs" />
  </xsl:apply-templates>
      </xsl:when>
      <xsl:when test="name(..)='xs:choice'">
        <xsl:apply-templates select="$target-node" mode="elements-parent-choice">
    <xsl:with-param name="maxOccurs" select="@maxOccurs|$maxOccurs" />
    <xsl:with-param name="minOccurs" select="@minOccurs|$minOccurs" />
  </xsl:apply-templates>
      </xsl:when>
      <xsl:otherwise>
        <xsl:apply-templates select="$target-node" mode="elements">
    <xsl:with-param name="maxOccurs" select="@maxOccurs|$maxOccurs" />
    <xsl:with-param name="minOccurs" select="@minOccurs|$minOccurs" />
  </xsl:apply-templates>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="xs:group[@name]" mode="elements">
    <xsl:param name="maxOccurs" select="@maxOccurs" />
    <xsl:param name="minOccurs" select="@minOccurs" /><xsl:apply-templates mode="elements">
    <xsl:with-param name="maxOccurs" select="@maxOccurs|$maxOccurs" />
    <xsl:with-param name="minOccurs" select="@minOccurs|$minOccurs" />
  </xsl:apply-templates></xsl:template>

  <xsl:template match="xs:group[@name]" mode="elements-parent-sequence">
    <xsl:param name="maxOccurs" select="@maxOccurs" />
    <xsl:param name="minOccurs" select="@minOccurs" /><xsl:apply-templates mode="elements-parent-sequence">
    <xsl:with-param name="maxOccurs" select="@maxOccurs|$maxOccurs" />
    <xsl:with-param name="minOccurs" select="@minOccurs|$minOccurs" />
  </xsl:apply-templates></xsl:template>

  <xsl:template match="xs:group[@name]" mode="elements-parent-choice">
    <xsl:param name="maxOccurs" select="@maxOccurs" />
    <xsl:param name="minOccurs" select="@minOccurs" /><xsl:apply-templates mode="elements-parent-choice">
    <xsl:with-param name="maxOccurs" select="@maxOccurs|$maxOccurs" />
    <xsl:with-param name="minOccurs" select="@minOccurs|$minOccurs" />
  </xsl:apply-templates></xsl:template>

  <xsl:template match="xs:any[@namespace]" mode="elements">
    <xsl:param name="maxOccurs" select="@maxOccurs" />
    <xsl:param name="minOccurs" select="@minOccurs" />{
  type: "element",
  namespace: "<xsl:value-of select="./@namespace" />",
  localName: undefined,
  minOccurs: <xsl:value-of select="(@minOccurs|$minOccurs, 1)[1]" />,
  maxOccurs: <xsl:value-of select="(@maxOccurs|$maxOccurs, 1)[1]" />
},</xsl:template>

  <xsl:template match="xs:complexContent[child::xs:extension]" mode="elements">
    <xsl:variable name="ext" select="./xs:extension" />
    <xsl:apply-templates select="//*[concat($prefix, @name)=$ext/@base]/*" mode="elements" />
    <xsl:apply-templates select="$ext/node()" mode="elements" />
  </xsl:template>

  <xsl:template match="xs:complexContent[child::xs:restriction[@base='xs:anyType']]" mode="elements">{}</xsl:template>

  <xsl:template match="xs:complexContent[child::xs:restriction[@base='xs:anyType']]" mode="elements-attributes">
    <xsl:apply-templates select="./xs:restriction/*" mode="elements-attributes" />
  </xsl:template>


  <xsl:template match="xs:complexContent[child::xs:extension]" mode="elements-attributes">
    <xsl:variable name="ext" select="./xs:extension" />
    <xsl:apply-templates select="//*[concat($prefix, @name)=$ext/@base]/*" mode="elements-attributes" />
    <xsl:apply-templates select="$ext/node()" mode="elements-attributes" />
  </xsl:template>

  <xsl:template match="xs:attributeGroup[@ref]" mode="elements-attributes"><xsl:apply-templates select="//xs:attributeGroup[concat($prefix,@name)=current()/@ref]" mode="elements-attributes" /></xsl:template>

  <xsl:template match="xs:attributeGroup[@name]" mode="elements-attributes">
    <xsl:choose>
      <xsl:when test="count(parent::*)=1"><xsl:apply-templates mode="elements-attributes" /></xsl:when>
      <xsl:otherwise>{
  type: "group",
  children: [<xsl:apply-templates mode="elements-attributes" />],
},</xsl:otherwise></xsl:choose></xsl:template>

  <xsl:template match="xs:attribute[@name]" mode="elements-attributes">
{
  type: "attribute",
  namespace: "<xsl:value-of select="$namespace" />",
  localName: "<xsl:value-of select="./@name" />",
  documentation: "<xsl:value-of select="normalize-space(document('docbook.rng')//rng:attribute[@name=current()/@name]//a:documentation/text())" />",
  <xsl:call-template name="render-attribute-children" />
},</xsl:template>

  <xsl:template name="render-attribute-children">
    <xsl:choose>
      <xsl:when test="not(@type)">
        <xsl:apply-templates mode="attributes-content" />
      </xsl:when>
      <xsl:when test="fn:starts-with(@type, $prefix)">
        <xsl:apply-templates select="//xs:attribute[concat($prefix,@name)=current()/@type]" mode="attributes-content" />
      </xsl:when>
      <xsl:otherwise>
dataType: {
  type: "internal",
  name: "<xsl:value-of select="@type" />"
},
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="xs:simpleType[child::xs:restriction[@base='xs:token']]" mode="attributes-content">
dataType: {
  type: "enum",
  values: ['<xsl:value-of select="./xs:restriction/xs:enumeration/@value" separator="','" />'],
},</xsl:template>

  <xsl:template match="xs:simpleType[child::xs:restriction[@base='xs:nonNegativeInteger']]" mode="attributes-content">
dataType: {
  type: "internal",
  name: "xs:nonNegativeInteger",
  minExclusive: "<xsl:value-of select="(./xs:restriction/xs:minExclusive/@value, 'undefined')[1]" />",
  minInclusive: "<xsl:value-of select="(./xs:restriction/xs:minInclusive/@value, 'undefined')[1]" />",
  maxExclusive: "<xsl:value-of select="(./xs:restriction/xs:maxExclusive/@value, 'undefined')[1]" />",
  maxInclusive: "<xsl:value-of select="(./xs:restriction/xs:maxInclusive/@value, 'undefined')[1]" />",
},</xsl:template>



  <xsl:template match="xs:attribute[@ref]" mode="elements-attributes">
    <xsl:choose>
      <xsl:when test="fn:starts-with(@ref, $prefix)">
        <xsl:apply-templates select="//xs:attribute[concat($prefix, @name)=current()/@ref]" mode="elements-attributes" />
      </xsl:when>
      <xsl:otherwise><xsl:variable name="split" select="fn:tokenize(./@ref, ':')" />{
  type: "attribute",
  namespace: "<xsl:value-of select="fn:namespace-uri-for-prefix($split[1], .)" />",
  localName: "<xsl:value-of select="$split[2]" />"
},</xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="xs:sequence|xs:choice|xs:group" mode="elements-attributes" />

  <xsl:template match="xs:attributeGroup" mode="elements elements-parent-sequence elements-parent-choice" />
  <xsl:template match="xs:attribute" mode="elements elements-parent-sequence elements-parent-choice" />

  <xsl:template match="xs:assert" mode="elements elements-parent-sequence elements-parent-choice elements-attributes" />
  <xsl:template match="xs:annotation" mode="elements elements-parent-sequence elements-parent-choice elements-attributes" />
  <xsl:template match="xs:documentation" mode="elements elements-parent-sequence elements-parent-choice elements-attributes" />


  <xsl:template match="*" mode="elements elements-parent-sequence elements-parent-choice elements-attributes attributes-content" priority="-1">
    [UNKNOWN <xsl:value-of select="name(.)" />]<xsl:copy-of select="." />[/UNKNOWN]
  </xsl:template>

</xsl:stylesheet>