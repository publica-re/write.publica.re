const unbounded = NaN;
export default 
    
{
  namespace: "http://docbook.org/ns/docbook",
  localName: "toc",
  documentation: "A table of contents",
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
  
    ],
  elements: 
      
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
  localName: "itemizedlist",
  documentation: "A list in which each entry is marked with a bullet or other dingbat",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "orderedlist",
  documentation: "A list in which each entry is marked with a sequentially incremented label",
  minOccurs: 1,
  maxOccurs: 1
},
  
      
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "simplelist",
  documentation: "An undecorated list of single words or short phrases",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "variablelist",
  documentation: "A list in which each entry is composed of a set of one or more terms and an associated description",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "segmentedlist",
  documentation: "A segmented list, a list of sets of elements",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "glosslist",
  documentation: "A wrapper for a list of glossary entries",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "bibliolist",
  documentation: "A wrapper for a list of bibliography entries",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "calloutlist",
  documentation: "A list of callout s",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "qandaset",
  documentation: "A question-and-answer set",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "example",
  documentation: "A formal example, with a title",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "figure",
  documentation: "A formal figure, generally an illustration, with a title",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "table",
  documentation: "A formal table in a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "equation",
  documentation: "A displayed mathematical equation",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "informalexample",
  documentation: "A displayed example without a title",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "informalfigure",
  documentation: "A untitled figure",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "informaltable",
  documentation: "A table without a title",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "informalequation",
  documentation: "A displayed mathematical equation without a title",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "sidebar",
  documentation: "A portion of a document that is isolated from the main narrative flow",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "blockquote",
  documentation: "A quotation set off from the main text",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "address",
  documentation: "A real-world address, generally a postal address",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "epigraph",
  documentation: "A short inscription at the beginning of a document or component",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "mediaobject",
  documentation: "A displayed media object (video, audio, image, etc.)",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "screenshot",
  documentation: "A representation of what the user sees or might see on a computer screen",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "procedure",
  documentation: "A list of operations to be performed in a well-defined sequence",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "task",
  documentation: "A task to be completed",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "productionset",
  documentation: "A set of EBNF productions",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "constraintdef",
  documentation: "The definition of a constraint in an EBNF production",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "msgset",
  documentation: "A detailed set of messages, usually error messages",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "screen",
  documentation: "Text that a user sees or might see on a computer screen",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "literallayout",
  documentation: "A block of text in which line breaks and white space are to be reproduced faithfully",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "programlistingco",
  documentation: "A program listing with associated areas used in callouts",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "screenco",
  documentation: "A screen with associated areas used in callouts",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "programlisting",
  documentation: "A literal listing of all or part of a program",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "synopsis",
  documentation: "A general-purpose element for representing the syntax of commands or functions",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "bridgehead",
  documentation: "A free-floating heading",
  minOccurs: 1,
  maxOccurs: 1
},
  
      
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "revhistory",
  documentation: "A history of the revisions to a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "funcsynopsis",
  documentation: "The syntax summary for a function definition",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "classsynopsis",
  documentation: "The syntax summary for a class definition",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "methodsynopsis",
  documentation: "A syntax summary for a method",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "constructorsynopsis",
  documentation: "A syntax summary for a constructor",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "destructorsynopsis",
  documentation: "A syntax summary for a destructor",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "fieldsynopsis",
  documentation: "The name of a field in a class definition",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "cmdsynopsis",
  documentation: "A syntax summary for a software command",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "caution",
  documentation: "A note of caution",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "important",
  documentation: "An admonition set off from the text",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "note",
  documentation: "A message set off from the text",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "tip",
  documentation: "A suggestion to the user, set off from the text",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "warning",
  documentation: "An admonition set off from the text",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
    
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "remark",
  documentation: "A remark (or comment) intended for presentation in a draft manuscript",
  minOccurs: 1,
  maxOccurs: 1
},
   
      
    
      
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "para",
  documentation: "A paragraph",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "formalpara",
  documentation: "A paragraph with a title",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "simpara",
  documentation: "A paragraph that contains only text and inline markup, no block elements",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "annotation",
  documentation: "An annotation",
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
  localName: "tocdiv",
  documentation: "A division in a table of contents",
  minOccurs: 1,
  maxOccurs: 1
},
  
          {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "tocentry",
  documentation: "A component title in a table of contents",
  minOccurs: 1,
  maxOccurs: 1
},
  
        ],
  occurs: {
    max: unbounded,
    min: 0,
  },
},
      ],
  occurs: {
    max: 1,
    min: 1,
  },
},
      
      
      
    
}
  
  