const unbounded = NaN;
export default 
    
{
  namespace: "http://docbook.org/ns/docbook",
  localName: "table",
  documentation: "A formal table in a document",
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
  localName: "label",
  documentation: "Specifies an identifying string for presentation purposes",
  
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
  localName: "tabstyle",
  documentation: "Specifies the table style",
  
},
  
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "floatstyle",
  documentation: "Specifies style information to be used when rendering the float",
  
},
  
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "orient",
  documentation: "Specifies the orientation of the table",
  
      
dataType: {
  type: "enum",
  values: ['land','port'],
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
  localName: "pgwide",
  documentation: "Indicates if the element is rendered across the column or the page",
  
},
  
      
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "shortentry",
  documentation: "Indicates if the short or long title should be used in a List of Tables",
  
},
      
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "tocentry",
  documentation: "Indicates if the table should appear in a List of Tables",
  
},
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "rowheader",
  documentation: "Indicates whether or not the entries in the first column should be considered row headers",
  
      
dataType: {
  type: "enum",
  values: ['firstcol','headers','norowheader'],
},
    
},
  

      
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "class",
  documentation: "Identifies the kind of bibliographic identifier",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "style",
  documentation: "This attribute specifies style information for the current element.",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "title",
  documentation: "This attribute offers advisory information about the element for which it is set.",
  
},
  
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "lang",
  documentation: "This attribute specifies the base language of an element's attribute values and text content. The default value of this attribute is unknown.",
  
},
  
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "onclick",
  documentation: "Occurs when the pointing device button is clicked over an element.",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "ondblclick",
  documentation: "Occurs when the pointing device button is double clicked over an element.",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "onmousedown",
  documentation: "Occurs when the pointing device button is pressed over an element.",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "onmouseup",
  documentation: "Occurs when the pointing device button is released over an element.",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "onmouseover",
  documentation: "Occurs when the pointing device is moved onto an element.",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "onmousemove",
  documentation: "Occurs when the pointing device is moved while it is over an element.",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "onmouseout",
  documentation: "Occurs when the pointing device is moved away from an element.",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "onkeypress",
  documentation: "Occurs when a key is pressed and released over an element.",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "onkeydown",
  documentation: "Occurs when a key is pressed down over an element.",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "onkeyup",
  documentation: "Occurs when a key is released over an element.",
  
},
  
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "summary",
  documentation: "Provides a summary of the table's purpose and structure for user agents rendering to non-visual media such as speech and Braille.",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "width",
  documentation: "Specifies the width (in characters) of the element",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "border",
  documentation: "Specifies the width (in pixels only) of the frame around a table.",
  
dataType: {
  type: "internal",
  name: "xs:nonNegativeInteger"
},
      
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "rules",
  documentation: "Specifies which rules will appear between cells within a table. The rendering of rules is user agent dependent.",
  
      
dataType: {
  type: "enum",
  values: ['none','groups','rows','cols','all'],
},
    
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "cellspacing",
  documentation: "Specifies how much space the user agent should leave between the left side of the table and the left-hand side of the leftmost column, the top of the table and the top side of the topmost row, and so on for the right and bottom of the table. The attribute also specifies the amount of space to leave between cells.",
  
},
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "cellpadding",
  documentation: "Specifies the amount of space between the border of the cell and its contents. If the value of this attribute is a pixel length, all four margins should be this distance from the contents. If the value of the attribute is a percentage length, the top and bottom margins should be equally separated from the content based on a percentage of the available vertical space, and the left and right margins should be equally separated from the content based on a percentage of the available horizontal space.",
  
},
  

      
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "frame",
  documentation: "Specifies how the table is to be framed. Note that there is no way to obtain a border on only the starting edge (left, in left-to-right writing systems) of the table.",
  
      
dataType: {
  type: "enum",
  values: ['all','bottom','none','sides','top','topbot','void','above','below','hsides','lhs','rhs','vsides','box','border'],
},
    
},
  
    ],
  elements: 
      
        
{
  type: "choice",
  children: [
          
{
  type: "sequence",
  children: [ 
            
    
      
{
  type: "choice",
  children: [
        {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "title",
  documentation: "The text of the title of a section of a document or of a formal block-level element",
  minOccurs: 1,
  maxOccurs: 1
},
  
        {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "titleabbrev",
  documentation: "The abbreviation of a title",
  minOccurs: 1,
  maxOccurs: 1
},
  
      ],
  occurs: {
    max: 2,
    min: 0,
  },
},
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "info",
  documentation: "A wrapper for information about a component or other block",
  minOccurs: 0,
  maxOccurs: 1
},
  
    
  
            
{
  type: "choice",
  children: [
              {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "alt",
  documentation: "A text-only annotation, often used for accessibility",
  minOccurs: 1,
  maxOccurs: 1
},
  
              
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "indexterm",
  documentation: "A wrapper for an indexed term",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
              {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "textobject",
  documentation: "A wrapper for a text description of an object and its associated meta-information",
  minOccurs: 1,
  maxOccurs: 1
},
  
            ],
  occurs: {
    max: unbounded,
    min: 0,
  },
},
            
{
  type: "choice",
  children: [
              {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "mediaobject",
  documentation: "A displayed media object (video, audio, image, etc.)",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
              {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "tgroup",
  documentation: "A wrapper for the main content of a table, or part of a table",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
            ],
  occurs: {
    max: 1,
    min: 1,
  },
},
            {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "caption",
  documentation: "A caption",
  minOccurs: 0,
  maxOccurs: 1
},
  
          ],
  occurs: {
    max: 1,
    min: 1,
  },
},
          
{
  type: "sequence",
  children: [ 
            {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "caption",
  documentation: "A caption",
  minOccurs: 1,
  maxOccurs: 1
},
  
            
{
  type: "choice",
  children: [
              {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "col",
  documentation: "Specifications for a column in an HTML table",
  minOccurs: 0,
  maxOccurs: unbounded
},
  
              {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "colgroup",
  documentation: "A group of columns in an HTML table",
  minOccurs: 0,
  maxOccurs: unbounded
},
  
            ],
  occurs: {
    max: 1,
    min: 1,
  },
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
  type: "choice",
  children: [
              {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "tbody",
  documentation: "A wrapper for the rows of a table or informal table",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
              {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "tr",
  documentation: "A row in an HTML table",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
            ],
  occurs: {
    max: 1,
    min: 1,
  },
},
          ],
  occurs: {
    max: 1,
    min: 1,
  },
},
        ],
  occurs: {
    max: 1,
    min: 1,
  },
},
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

      
      
      
      
      

      
      
    
}
  
  