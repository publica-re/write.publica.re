const unbounded = NaN;
export default 
    
{
  namespace: "http://docbook.org/ns/docbook",
  localName: "authorgroup",
  documentation: "Wrapper for author information when a document has multiple authors or collaborators",
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
  type: "choice",
  children: [
        {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "author",
  documentation: "The name of an individual author",
  minOccurs: 1,
  maxOccurs: 1
},
  
        {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "editor",
  documentation: "The name of the editor of a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
        {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "othercredit",
  documentation: "A person or entity, other than an author or editor, credited in a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      ],
  occurs: {
    max: unbounded,
    min: 1,
  },
},
      
      
      
    
}
  
  