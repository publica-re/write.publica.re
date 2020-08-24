echo "cleaning directory"
rm -rf defs
rm -rf elements
echo "compiling"
saxon-xslt docbook_51.xsd xsdToTsx.xsl