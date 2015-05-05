/**
 * SuiteScript Template APIs
 */


/**
 * Create a template renderer used to generate various outputs based on a template
 *
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param {string} type    media type: pdf|html
 * @param {string} [engineType] Default is freemarker/html
 * @return {nlobjTemplateRenderer}
 *
 */
function nlapiCreateTemplateRenderer(type, engineType) {
}

/**
 * This API was deprecated in NetSuite version 2008.1, however, it continues to be supported.
 * This function will not be enhanced in future versions of NetSuite.
 *
 * In its place, users can use nlapiMergeRecord(id, baseType, baseId, altType, altId, fields),
 * which performs exactly the same as nlapiMergeTemplate. The only distinction between the two functions
 * is that nlapiMergeRecord returns a nlobjFile object (instead of a String).
 *
 * @param id
 * @param baseType
 * @param baseId
 * @param altType
 * @param altId
 * @param fields
 *
 * @deprecated 2008.1
 */
function nlapiMergeTemplate(id, baseType, baseId, altType, altId, fields) {
}

/**
 * Template engine that produces HTML and PDF printed forms utilizing advanced PDF/HTML template capabilities
 *
 * This object uses FreeMarker syntax to interpret a template passed in as string.
 * Interpreted content can be rendered in two different formats: as HTML output to an nlobjResponse object
 *  or as XML string that can be passed to nlapiXMLToPDF(xmlstring) to produce a PDF.
 *
 * This object is available when the Advanced PDF/HTML Templates (Beta) feature is enabled.
 * Because this feature is a beta version, this API is also considered beta and may be subject to change.
 * For information about this feature, see Advanced PDF/HTML Templates (Beta).
 *
 * Note: The advanced template API expects your template string to conform to FreeMarker syntax.
 * FreeMarker documentation is available from this link, or go to: http://freemarker.sourceforge.net/docs/index.html.
 *
 * Note: As stated above, the nlapiXMLToPDF API can be used to produce a PDF from the string rendered by
 * this object's methods. This API is used in conjunction with the Big Faceless Report Generator,
 * a third-party library built by Big Faceless Organization (BFO). See nlapiXMLToPDF(xmlstring)
 * for links to BFO documentation.
 *
 * @constructor
 */
function nlobjTemplateRenderer() {
}

/**
 * Add a record for @to a template engine
 *
 * @param  {string} [recordName] name of record used as a reference in template
 * @param  {nlobjRecord} record to add to template engine
 *
 * @return {void}
 *
 */
nlobjTemplateRenderer.prototype.addRecord = function(recordName, record) {
};

/**
 * Render the output of the template engine into the response
 * @param {nlobjResponse} response
 *
 * @return {void}
 */
nlobjTemplateRenderer.prototype.renderToResponse = function(response) {
};

/**
 * Returns template content interpreted by FreeMarker as XML string that can be passed to nlapiXMLToPDF(xmlstring)
 * to produce PDF output.
 *
 * Note: The nlapiXMLToPDF API is used in conjunction with the Big Faceless Report Generator, a third-party
 * library built by Big Faceless Organization (BFO). See nlapiXMLToPDF(xmlstring) for links to BFO documentation.
 *
 * @return {string} XML string of template interpreted by FreeMarker
 * @since 2013.1
 */
nlobjTemplateRenderer.prototype.renderToString = function() {
};

/**
 * Add search results to a template engine
 *
 * @param {string} [searchName] name of search results used as a reference in template
 * @param {nlobjSearchResult[]} [results] An array of nlobjSearchResult objects
 *
 * @return {void}
 *
 */
nlobjTemplateRenderer.prototype.addSearchResults = function(searchName, results) {
};

/**
 * Set the template xml in the template engine
 * @param  {string} xml BFO template
 *
 * @return {void}
 */
nlobjTemplateRenderer.prototype.setTemplate = function(xml) {
};
