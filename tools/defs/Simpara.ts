const unbounded = NaN;
export default 
    
{
  namespace: "http://docbook.org/ns/docbook",
  localName: "simpara",
  documentation: "A paragraph that contains only text and inline markup, no block elements",
  mixed: true,
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
  localName: "abbrev",
  documentation: "An abbreviation, especially one followed by a period",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "acronym",
  documentation: "An often pronounceable word made from the initial (or selected) letters of a name or phrase",
  minOccurs: 1,
  maxOccurs: 1
},
  
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
  localName: "annotation",
  documentation: "An annotation",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "coref",
  documentation: "A cross reference to a co",
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
  localName: "emphasis",
  documentation: "Emphasized text",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "firstterm",
  documentation: "The first occurrence of a term",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "footnote",
  documentation: "A footnote",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "footnoteref",
  documentation: "A cross reference to a footnote (a footnote mark)",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "foreignphrase",
  documentation: "A word or phrase in a language other than the primary language of the document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "glossterm",
  documentation: "A glossary term",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "inlinemediaobject",
  documentation: "An inline media object (video, audio, image, and so on)",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "phrase",
  documentation: "A span of text",
  minOccurs: 1,
  maxOccurs: 1
},
  {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "phrase",
  documentation: "A span of text",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "quote",
  documentation: "An inline quotation",
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
  localName: "subscript",
  documentation: "A subscript (as in H₂O, the molecular formula for water)",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "superscript",
  documentation: "A superscript (as in x², the mathematical notation for x multiplied by itself)",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "trademark",
  documentation: "A trademark",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "wordasword",
  documentation: "A word meant specifically as a word and not representing anything else",
  minOccurs: 1,
  maxOccurs: 1
},
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "xref",
  documentation: "A cross reference to another part of the document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "link",
  documentation: "A hypertext link",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "olink",
  documentation: "A link that addresses its target indirectly",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "anchor",
  documentation: "A spot in the document",
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
  namespace: "http://docbook.org/ns/docbook",
  localName: "productname",
  documentation: "The formal name of a product",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "database",
  documentation: "The name of a database, or part of a database",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "application",
  documentation: "The name of a software program",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "hardware",
  documentation: "A physical part of a computer system",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "citation",
  documentation: "An inline bibliographic reference to another published work",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "citerefentry",
  documentation: "A citation to a reference page",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "citetitle",
  documentation: "The title of a cited work",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "citebiblioid",
  documentation: "A citation of a bibliographic identifier",
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
  localName: "person",
  documentation: "A person and associated metadata",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "personname",
  documentation: "The personal name of an individual",
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
  localName: "editor",
  documentation: "The name of the editor of a document",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "jobtitle",
  documentation: "The title of an individual in an organization",
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
  localName: "replaceable",
  documentation: "Content that may or must be replaced by the user",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "package",
  documentation: "A software or application package",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "parameter",
  documentation: "A value or a symbolic reference to a value",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "termdef",
  documentation: "An inline definition of a term",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "nonterminal",
  documentation: "A non-terminal in an EBNF production",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "systemitem",
  documentation: "A system-related item or term",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "option",
  documentation: "An option for a software command",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "optional",
  documentation: "Optional information",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "property",
  documentation: "A unit of data associated with some part of a computer system",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "inlineequation",
  documentation: "A mathematical equation or expression occurring inline",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "tag",
  documentation: "A component of XML (or SGML) markup",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "markup",
  documentation: "A string of formatting markup in text that is to be represented literally",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "token",
  documentation: "A unit of information",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "symbol",
  documentation: "A name that is replaced by a value before processing",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "literal",
  documentation: "Inline text that is some literal value",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "code",
  documentation: "An inline code fragment",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "constant",
  documentation: "A programming or system constant",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "email",
  documentation: "An email address",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "uri",
  documentation: "A Uniform Resource Identifier",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "guiicon",
  documentation: "Graphic and/or text appearing as a icon in a GUI",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "guibutton",
  documentation: "The text on a button in a GUI",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "guimenuitem",
  documentation: "The name of a terminal menu item in a GUI",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "guimenu",
  documentation: "The name of a menu in a GUI",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "guisubmenu",
  documentation: "The name of a submenu in a GUI",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "guilabel",
  documentation: "The text of a label in a GUI",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "menuchoice",
  documentation: "A selection or series of selections from a menu",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "mousebutton",
  documentation: "The conventional name of a mouse button",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "keycombo",
  documentation: "A combination of input actions",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "keycap",
  documentation: "The text printed on a key on a keyboard",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "keycode",
  documentation: "The internal, frequently numeric, identifier for a key on a keyboard",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "keysym",
  documentation: "The symbolic name of a key on a keyboard",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "shortcut",
  documentation: "A key combination for an action that is also accessible through a menu",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "accel",
  documentation: "A graphical user interface (GUI) keyboard shortcut",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "prompt",
  documentation: "A character or string indicating the start of an input field in a computer display",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "envar",
  documentation: "A software environment variable",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "filename",
  documentation: "The name of a file",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "command",
  documentation: "The name of an executable program or other software command",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "computeroutput",
  documentation: "Data, generally text, displayed or presented by a computer",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "userinput",
  documentation: "Data entered by the user",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "function",
  documentation: "The name of a function or subroutine, as in a programming language",
  minOccurs: 1,
  maxOccurs: 1
},
  
      
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "varname",
  documentation: "The name of a variable",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "returnvalue",
  documentation: "The value returned by a function",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "type",
  documentation: "The classification of a value",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "classname",
  documentation: "The name of a class, in the object-oriented programming sense",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "exceptionname",
  documentation: "The name of an exception",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "interfacename",
  documentation: "The name of an interface",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "methodname",
  documentation: "The name of a method",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "modifier",
  documentation: "Modifiers in a synopsis",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "initializer",
  documentation: "The initializer for a fieldsynopsis",
  minOccurs: 1,
  maxOccurs: 1
},
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "ooclass",
  documentation: "A class in an object-oriented programming language",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "ooexception",
  documentation: "An exception in an object-oriented programming language",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "oointerface",
  documentation: "An interface in an object-oriented programming language",
  minOccurs: 1,
  maxOccurs: 1
},
  
    
  
    
  
      
    
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "errorcode",
  documentation: "An error code",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "errortext",
  documentation: "An error message.",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "errorname",
  documentation: "An error name",
  minOccurs: 1,
  maxOccurs: 1
},
  
      {
  type: "element",
  namespace: "http://docbook.org/ns/docbook",
  localName: "errortype",
  documentation: "The classification of an error message",
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
  
  