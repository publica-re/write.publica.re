const unbounded = NaN;
export default 
        
{
  namespace: "http://docbook.org/ns/docbook",
  localName: "info",
  documentation: "A wrapper for information about a component or other block",
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
  
        ],
  elements: 
          
{
  type: "choice",
  children: [
            
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "abstract",
  documentation: "A summary",
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
  localName: "artpagenums",
  documentation: "The page numbers of an article as published",
  minOccurs: 1,
  maxOccurs: 1
},
  
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
  localName: "authorgroup",
  documentation: "Wrapper for author information when a document has multiple authors or collaborators",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "authorinitials",
  documentation: "The initials or other short identifier for an author",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "bibliocoverage",
  documentation: "The spatial or temporal coverage of a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "biblioid",
  documentation: "An identifier for a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "bibliosource",
  documentation: "The source of a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "collab",
  documentation: "Identifies a collaborator",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "confgroup",
  documentation: "A wrapper for document meta-information about a conference",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "contractsponsor",
  documentation: "The sponsor of a contract",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "contractnum",
  documentation: "The contract number of a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "copyright",
  documentation: "Copyright information about a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "cover",
  documentation: "Additional content for the cover of a publication",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "date",
  documentation: "The date of publication or revision of a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "edition",
  documentation: "The name or number of an edition of a document",
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
  localName: "issuenum",
  documentation: "The number of an issue of a journal",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "keywordset",
  documentation: "A set of keywords describing the content of a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "legalnotice",
  documentation: "A statement of legal obligations or requirements",
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
  localName: "org",
  documentation: "An organization and associated metadata",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "orgname",
  documentation: "The name of an organization",
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
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "pagenums",
  documentation: "The numbers of the pages in a book, for use in a bibliographic entry",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "printhistory",
  documentation: "The printing history of a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "pubdate",
  documentation: "The date of publication of a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "publisher",
  documentation: "The publisher of a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "publishername",
  documentation: "The name of the publisher of a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "releaseinfo",
  documentation: "Information about a particular release of a document",
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
  localName: "seriesvolnums",
  documentation: "Numbers of the volumes in a series of books",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "subjectset",
  documentation: "A set of terms describing the subject matter of a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "volumenum",
  documentation: "The volume number of a document in a set (as of books in a set or articles in a journal)",
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
  localName: "extendedlink",
  documentation: "An XLink extended link",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "bibliomisc",
  documentation: "Untyped bibliographic information",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "bibliomset",
  documentation: "A cooked container for related bibliographic information",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "bibliorelation",
  documentation: "The relationship of a document to another",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "biblioset",
  documentation: "A raw container for related bibliographic information",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "itermset",
  documentation: "A set of index terms in the meta-information of a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "productname",
  documentation: "The formal name of a product",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "productnumber",
  documentation: "A number assigned to a product",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
            {
  type: "element",
  namespace: "##other",
  localName: undefined,
  minOccurs: 1,
  maxOccurs: 1
},
          ],
  occurs: {
    max: unbounded,
    min: 0,
  },
},
          
          
        
}
  
      