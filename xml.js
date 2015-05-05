/**
 * SuiteScript XML APIs
 */


/**
 * Escape a string for use in an XML document
 *
 * @param {string} text string to escape
 *
 * @return {string}
 * @since 2008.1
 */
function nlapiEscapeXML(text) {
}

/**
 * Select a node from an XML node using XPath. Supports custom namespaces
 *  (nodes in default namespace can be referenced using "nlapi" as the prefix)
 *
 * @param {Node} node node being queried
 * @param {string} xpath string containing XPath expression
 *
 * @return {Node}
 * @since 2008.1
 */
function nlapiSelectNode(node, xpath) {
}

/**
 * Select an array of nodes from an XML node using XPath. Supports custom namespaces
 *  (nodes in default namespace can be referenced using "nlapi" as the prefix)
 *
 * @param {Node} node node being queried
 * @param {string} xpath string containing XPath expression
 *
 * @return {Node[]}
 * @since 2008.1
 */
function nlapiSelectNodes(node, xpath) {
}

/**
 * Select a value from an XML node using XPath. Supports custom namespaces
 *  (nodes in default namespace can be referenced using "nlapi" as the prefix)
 *
 * @param {Node} node node being queried
 * @param {string} xpath string containing XPath expression
 * @return {string}
 * @since 2008.2
 */
function nlapiSelectValue(node, xpath) {
}

/**
 * Select an array of values from an XML node using XPath. Supports custom namespaces
 *  (nodes in default namespace can be referenced using "nlapi" as the prefix)
 *
 * @param {Node} node node being queried
 * @param {string} xpath string containing XPath expression
 *
 * @return {string[]}
 * @since 2008.1
 */
function nlapiSelectValues(node, xpath) {
}

/**
 * Convert a string into an XML document.
 * Note that in Server SuiteScript XML is supported natively by the JS runtime using the e4x standard
 *      (http://en.wikipedia.org/wiki/E4X)
 * This makes scripting XML simpler and more efficient. his API is useful if you want to navigate/query
 *  a structured XML document more effectively using either the Document API or NetSuite built- in XPath functions.
 *
 * @param {string} str string being parsed into an XML document
 *
 * @return {Node}
 * @since 2008.1
 */
function nlapiStringToXML(str) {
}

/**
 * Convert an XML document into a string.
 *  Note that in Server SuiteScript XML is supported natively by the JS runtime using the e4x standard
 *      (http://en.wikipedia.org/wiki/E4X)
 * This makes scripting XML data simpler and more efficient. This API is useful if you want to serialize
 *  and store a Document in a custom field (for example).
 *
 * @param {Node} xml document being serialized into a string
 *
 * @return {string}
 * @since 2008.1
 */
function nlapiXMLToString(xml) {
}

/**
 * Validate that a given XML document conforms to a given XML schema.
 * XML Schema Definition (XSD) is the expected schema format.
 *
 * @param {document} xmlDocument xml to validate
 * @param {document} schemaDocument schema to enforce
 * @param {string} schemaFolderId if your schema utilizes <import> or <include> tags which
 *                      refer to sub-schemas by file name (as opposed to URL),
 *                      provide the Internal Id of File Cabinet folder containing these
 *                      sub-schemas as the schemaFolderId argument
 *
 * @throws {nlobjError} error containing validation failure message(s) - limited to first 10
 *
 * @since 2014.1
 */
function nlapiValidateXML(xmlDocument, schemaDocument, schemaFolderId) {
}

/**
 * Generate a PDF from XML using the BFO report writer (see http://big.faceless.org/products/report/)
 *
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param {string} input string containing BFO compliant XHTML
 *
 * @return {nlobjFile}
 * @exception {ERROR_PARSING_XML}
 * @since 2009.1
 */
function nlapiXMLToPDF(input) {
}
