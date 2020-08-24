const unbounded = NaN;
export default 
    
{
  namespace: "http://docbook.org/ns/docbook",
  localName: "tgroup",
  documentation: "A wrapper for the main content of a table, or part of a table",
  mixed: false,
  attributes: [
      
      
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "role",
  documentation: "",
  
},
      
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "tgroupstyle",
  documentation: "Additional style information for downstream processing; typically the name of a style.",
  
},
      
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "cols",
  documentation: "The number of columns in the table. Must be an integer greater than zero.",
  
dataType: {
  type: "internal",
  name: "xs:positiveInteger"
},
      
},
      
    {
  type: "attribute",
  namespace: "http://www.w3.org/XML/1998/namespace",
  localName: "id"
},
    {
  type: "attribute",
  namespace: "http://www.w3.org/XML/1998/namespace",
  localName: "lang"
},
    {
  type: "attribute",
  namespace: "http://www.w3.org/XML/1998/namespace",
  localName: "base"
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "version",
  documentation: "Specifies the DocBook version of the element and its descendants",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "remap",
  documentation: "Provides the name or similar semantic identifier assigned to the content in some previous markup scheme",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "xreflabel",
  documentation: "Provides the text that is to be generated for a cross reference to the element",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "revisionflag",
  documentation: "Identifies the revision status of the element",
  
      
dataType: {
  type: "enum",
  values: ['changed','added','deleted','off'],
},
    
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "dir",
  documentation: "Identifies the direction of text in an element",
  
      
dataType: {
  type: "enum",
  values: ['ltr','rtl','lro','rlo'],
},
    
},
    
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "arch",
  documentation: "Designates the computer or chip architecture to which the element applies",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "audience",
  documentation: "Designates the intended audience to which the element applies, for example, system administrators, programmers, or new users.",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "condition",
  documentation: "provides a standard place for application-specific effectivity",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "conformance",
  documentation: "Indicates standards conformance characteristics of the element",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "os",
  documentation: "Indicates the operating system to which the element is applicable",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "revision",
  documentation: "Indicates the editorial revision to which the element belongs",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "security",
  documentation: "Indicates something about the security level associated with the element to which it applies",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "userlevel",
  documentation: "Indicates the level of user experience for which the element applies",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "vendor",
  documentation: "Indicates the computer vendor to which the element applies.",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "wordsize",
  documentation: "Indicates the word size (width in bits) of the computer architecture to which the element applies",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "outputformat",
  documentation: "Indicates the output format (for example, print or epub) to which the element applies",
  
},
  
    
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "vocab",
  documentation: "The RDFa Lite vocab",
  
dataType: {
  type: "internal",
  name: "xs:anyURI"
},
      
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "typeof",
  documentation: "The RDFa Lite typeof",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "property",
  documentation: "The RDFa Lite property",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "resource",
  documentation: "The RDFa Lite resource",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "prefix",
  documentation: "The RDFa Lite prefix",
  
},
  
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "annotations",
  documentation: "Identifies one or more annotations that apply to this element",
  
},
  
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "linkend",
  documentation: "Points to an internal link target by identifying the value of its xml:id attribute",
  
dataType: {
  type: "internal",
  name: "xs:IDREF"
},
      
},
    {
  type: "attribute",
  namespace: "http://www.w3.org/1999/xlink",
  localName: "href"
},
    {
  type: "attribute",
  namespace: "http://www.w3.org/1999/xlink",
  localName: "type"
},
    {
  type: "attribute",
  namespace: "http://www.w3.org/1999/xlink",
  localName: "role"
},
    {
  type: "attribute",
  namespace: "http://www.w3.org/1999/xlink",
  localName: "arcrole"
},
    {
  type: "attribute",
  namespace: "http://www.w3.org/1999/xlink",
  localName: "title"
},
    {
  type: "attribute",
  namespace: "http://www.w3.org/1999/xlink",
  localName: "show"
},
    {
  type: "attribute",
  namespace: "http://www.w3.org/1999/xlink",
  localName: "actuate"
},
  
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "char",
  documentation: "Specifies the alignment character when align is set to char .",
  
},
  
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "charoff",
  documentation: "Specifies the percentage of the column's total width that should appear to the left of the first occurance of the character identified in char when align is set to char .",
  
      
dataType: {
  type: "internal",
  name: "xs:nonNegativeInteger",
  minExclusive: "0",
  minInclusive: "undefined",
  maxExclusive: "100",
  maxInclusive: "undefined",
},
    
},
  
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "colsep",
  documentation: "Specifies the presence or absence of the column separator",
  
},
  
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "rowsep",
  documentation: "Specifies the presence or absence of the row separator",
  
},
  
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "align",
  documentation: "Specifies the (horizontal) alignment of the video data",
  
      
dataType: {
  type: "enum",
  values: ['center','char','justify','left','right'],
},
    
},
  
    ],
  elements: 
      
{
  type: "sequence",
  children: [
        {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "colspec",
  documentation: "Specifications for a column in a table",
  minOccurs: 0,
  maxOccurs: unbounded
},
  
        {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "spanspec",
  documentation: "Formatting information for a spanned column in a table",
  minOccurs: 0,
  maxOccurs: unbounded
},
  
        {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "thead",
  documentation: "A table header consisting of one or more rows",
  minOccurs: 0,
  maxOccurs: 1
},
  
        {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "tfoot",
  documentation: "A table footer consisting of one or more rows",
  minOccurs: 0,
  maxOccurs: 1
},
  
        {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "tbody",
  documentation: "A wrapper for the rows of a table or informal table",
  minOccurs: 1,
  maxOccurs: 1
},
  
      ],
  occurs: {
    max: 1,
    min: 1,
  },
},
      
      
      
      
      
      
      
      
      
      
    
}
  
  