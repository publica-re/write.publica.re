const unbounded = NaN;
export default 
    
{
  namespace: "http://docbook.org/ns/docbook",
  localName: "part",
  documentation: "A division in a book",
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
  
      
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "label",
  documentation: "Specifies an identifying string for presentation purposes",
  
},
      
    
{
  type: "attribute",
  namespace: "http://docbook.org/ns/docbook",
  localName: "status",
  documentation: "Identifies the editorial or publication status of the element on which it occurs",
  
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
  
        {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "subtitle",
  documentation: "The subtitle of a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      ],
  occurs: {
    max: 3,
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
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "partintro",
  documentation: "An introduction to the contents of a part",
  minOccurs: 0,
  maxOccurs: 1
},
  
        
{
  type: "choice",
  children: [
          
    
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "glossary",
  documentation: "A glossary",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "bibliography",
  documentation: "A bibliography",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "index",
  documentation: "An index to a book or part of a book",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "toc",
  documentation: "A table of contents",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "dedication",
  documentation: "The dedication of a book or other component",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "acknowledgements",
  documentation: "Acknowledgements of a book or other component",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "preface",
  documentation: "Introductory matter preceding the first chapter of a book",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "chapter",
  documentation: "A chapter, as of a book",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "appendix",
  documentation: "An appendix in a book or article",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "article",
  documentation: "An article",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "colophon",
  documentation: "Text at the back of a book describing facts about its production",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
    
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "refentry",
  documentation: "A reference page (originally a UNIX man-style reference page)",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "reference",
  documentation: "A collection of reference entries",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
    
  
          {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "topic",
  documentation: "A modular unit of documentation not part of any particular narrative flow",
  minOccurs: 1,
  maxOccurs: unbounded
},
  
        ],
  occurs: {
    max: 1,
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
  
  