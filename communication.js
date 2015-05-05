/**
 * SuiteScript Communication APIs
 *
 * Use these APIs to communicate to external systems from within NetSuite.
 */


/**
 * Return a URL with a generated OAuth token
 *
 * Note that you must have the SuiteSignOn feature enabled in your account before you can use SuiteSignOn functionality
 *
 * Note: Once the SuiteSignOn record is saved, both the scriptId and system-generated ID are prefixed with 'customsso'
 *
 * @restriction User event, Suitelets and Portlets only
 * @governance 20 units
 *
 * @param {string} id The custom scriptId specified on the SuiteSignOn record.
 *                      NetSuite recommends you create a custom scriptId for each SuiteSignOn record to avoid naming
 *                      conflicts should you decide use SuiteBundler to deploy your scripts into other accounts.
 *                      If you do not create a custom scriptId, a system-generated ID will be generated for you once
 *                      the SuiteSignOn record is saved. You can also use the system-generated ID as the id value.
 *
 * @return {string} URL, OAuth token, and any integration variables as a string
 * @exception {SSS_SUITESIGNON_NOT_CONFIGURED}
 * @exception {SSS_INVALID_SUITESIGNON}
 * @since 2009.2
 */
function nlapiOutboundSSO(id) {
}

/**
 * Requests an HTTP(s) URL (internal or external)
 *
 * Note a timeout occurs if the initial connection takes > 5 seconds and/or the request takes > 45 to respond.
 *      nlapiRequestURL(...) automatically encodes binary content using base64 representation,
 *      since JavaScript is a character-based language with no support for binary types.
 *      This means you can take the contents returned and save them in the NetSuite file cabinet as a file
 *      or stream them directly to a response.
 *
 * Also note that if you call nlapiRequestURL(...), passing in the header with a content type,
 * NetSuite respects only the following two types:
 *      • "application/json"
 *      • "application/soap+xml"
 * Otherwise, NetSuite will overwrite the content type with our default type as if the type had not
 * been specified. NetSuite default types are:
 *      • "text/xml; charset=UTF~8"
 *      • "application/x-www-form-urlencoded; charset=UTF~8"
 *
 * Additionally, nlapiRequestURL(...) calls from the server do not include the current user's session information.
 * This means you can only use this API to request Suitelets that are set to available
 * without login using the external URL.
 *
 * This API is supported in client, user event, scheduled, portlet, and Suitelet scripts.
 *
 * @governance 10 units
 *
 * @param {string} url The HTTP(s) URL being requested - (fully qualified unless NetSuite page)
 * @param {string|Object} [postdata] Body used for a POST request. It can either be an associative array of
 *                              form parameters or a string. If set to null, then a GET request is used.
 * @param {Object} [headers] An associative array of name (header) value (header value) pairs
 * @param {function} [callback] A callback function called when the request is completed (Client SuiteScript only).
 *                      If you specify a callback in Client SuiteScript, the request is processed asynchronously,
 *                      and once it is processed, the callback is called/invoked.
 *                      If you know your request may take a long time and you do not want to impair user experience,
 *                      it is recommended that you set the callback function within nlapiRequestURL so that
 *                      the request is processed asynchronously. If a callback function is specified,
 *                      then the response will be passed, instead to the callback function, upon completion.
 *                      However, if validation is needed, nlapiRequestURL should run synchronously and the
 *                      callback function should be omitted from nlapiRequestURL.
 *                      The function is passed an nlobjServerResponse with the results.
 * @param {string} [httpMethod] Specify the appropriate http method to use for your integration.
 *                      Supported http methods are HEAD, DELETE and PUT. This parameter allows for easier
 *                      integration with external RESTful services using the standard REST functions.
 *                      Note that if the httpMethod parameter is empty or not specified, this behavior is followed:
 *                      the method is POST if postdata is not empty. The method is GET if it is.
 *                      Be aware that the httpMethod parameter overrides, so you can specify GET and specify postdata,
 *                      NetSuite will do a GET and ignore the postdata.
 *
 * @return {nlobjServerResponse|void} void if a callback function has been specified
 * @exception {SSS_REQUEST_TIME_EXCEEDED} if the connection exceeds the 45 second timeout period
 * @exception {SSS_UNKNOWN_HOST}
 * @exception {SSS_INVALID_HOST_CERT}
 * @since 2007.0
 */
function nlapiRequestURL(url, postdata, headers, callback, httpMethod) {
}

/**
 * Allows you to send credentials outside of NetSuite
 *
 * This API securely accesses a handle to credentials users specify in a NetSuite credential field.
 *
 * Note: NetSuite credential fields can be added to Suitelets using the
 *      nlobjForm.addCredentialField(id, label, website, scriptId, value, entityMatch, tab) method.
 *
 * Note a timeout occurs if the initial connection takes > 5 seconds and/or the request takes > 45 to respond.
 *      nlapiRequestURL(...) automatically encodes binary content using base64 representation,
 *      since JavaScript is a character-based language with no support for binary types.
 *      This means you can take the contents returned and save them in the NetSuite file cabinet as a file
 *      or stream them directly to a response.
 *
 * Also note that if you call nlapiRequestURLWithCredentials(...), passing in the header with a content type,
 * NetSuite respects only the following two types:
 *      • "application/json"
 *      • "application/soap+xml"
 * Otherwise, NetSuite will overwrite the content type with our default type as if the type had not
 * been specified. NetSuite default types are:
 *      • "text/xml; charset=UTF~8"
 *      • "application/x-www-form-urlencoded; charset=UTF~8"
 *
 * This API is supported in client, user event, scheduled, portlet, and Suitelet scripts.
 *
 * @governance 10 units
 *
 * @param {string} credentials List of credential handles. This API does not know where you have stored the data,
 *                      it only knows the credentials to use by handle. Therefore, if you have multiple credentials for
 *                      a single call, you will need a list. The handles are 32 byte, globally unique strings (GUIDs).
 * @param {string} url The HTTP(s) URL being requested - (fully qualified unless NetSuite page)
 * @param {string|Object} [postdata] Body used for a POST request. It can either be an associative array of
 *                              form parameters or a string. If set to null, then a GET request is used.
 * @param {Object} [headers] An associative array of name (header) value (header value) pairs
 * @param {string} [httpMethod] Specify the appropriate http method to use for your integration.
 *                      Supported http methods are HEAD, DELETE and PUT. This parameter allows for easier
 *                      integration with external RESTful services using the standard REST functions.
 *                      Note that if the httpMethod parameter is empty or not specified, this behavior is followed:
 *                      the method is POST if postdata is not empty. The method is GET if it is.
 *                      Be aware that the httpMethod parameter overrides, so you can specify GET and specify postdata,
 *                      NetSuite will do a GET and ignore the postdata.
 *
 * @return {nlobjResponse}
 * @since 2012.1
 */
function nlapiRequestURLWithCredentials(credentials, url, postdata, headers, httpMethod) {
}

/**
 * Sends a single on-demand campaign email to a specified recipient
 *  and returns a campaign response ID to track the email
 *
 * @governance 10 units
 * @restriction works in conjunction with the Lead Nurturing (campaigndrip) sublist only
 *
 * @param {int} campaigneventid internal ID of the campaign event
 * @param {int} recipientid internal ID of the recipient - the recipient must have an email
 *
 * @return {int}
 * @since 2010.1
 */
function nlapiSendCampaignEmail(campaigneventid, recipientid) {
}

/**
 * Send out an email and associate it with records in the system
 * Supported base types are entity for entities, transaction for transactions, activity for activities and cases,
 *  record|recordtype for custom records
 *
 * @governance 10 units
 * @restriction all outbound emails subject to email Anti-SPAM policies
 *
 * @param {int} from internal ID for employee user on behalf of whom this email is sent
 * @param {string, int} to email address or internal ID of user that this email is being sent to
 * @param {string} subject email subject
 * @param {string} body email body
 * @param {string, string[]} [cc] copy email address(es)
 * @param {string, string[]} [bcc] blind copy email address(es)
 * @param {Object} [records] Object of base types -> internal IDs used to associate email to records. i.e.
 *                      {entity: 100, record: 23, recordtype: customrecord_surveys}
 * @param {nlobjFile[]} [files] array of nlobjFile objects (files) to include as attachments
 *
 * @return {void}
 *
 * @exception {SSS_AUTHOR_MUST_BE_EMPLOYEE}
 * @exception {SSS_AUTHOR_REQD}
 * @exception {SSS_INVALID_RECIPIENT_ID}
 * @exception {SSS_MISSING_REQD_ARG}
 * @exception {SSS_RECIPIENT_REQD}
 * @exception {SSS_INVALID_CC_EMAIL}
 * @exception {SSS_INVALID_BCC_EMAIL}
 * @since 2007.0
 */
function nlapiSendEmail(from, to, subject, body, cc, bcc, records, files) {
}

/**
 * Send out a fax and associate it with records in the system. This requires fax preferences to be configured
 * Supported base types are entity for entities, transaction for transactions, activity for activities and cases,
 *  record|recordtype for custom records
 *
 * @governance 10 units
 *
 * @param {int} from internal ID for employee user on behalf of whom this fax is sent
 * @param {string, int} to fax address or internal ID of user that this fax is being sent to
 * @param {string} subject fax subject
 * @param {string} [body] fax body
 * @param {Object} [records] Object of base types -> internal IDs used to associate fax to records. i.e.
 *                      {entity: 100, record: 23, recordtype: customrecord_surveys}
 * @param {nlobjFile[]} [files] array of nlobjFile objects (files) to include as attachments
 * @param {boolean} [internal] When a message record is set to internal only, customers do not see
 *                      the message from the customer center
 * @return {void}
 * @since 2008.2
 */
function nlapiSendFax(from, to, subject, body, records, files, internal) {
}

/**
 * Resolve a URL to a resource or object in the system
 *
 * This API is supported in client, user event, scheduled, portlet, and Suitelet scripts.
 *
 * @param {string} type type specifier for URL: suitelet|tasklink|record|mediaitem
 * @param {string} subtype subtype specifier for URL (corresponding to type): scriptid|taskid|recordtype|mediaid
 * @param {string} [id] internal ID specifier (sub-subtype corresponding to type): deploymentid|n/a|recordid|n/a
 * @param {string|boolean} [pageMode] string specifier used to configure page (suitelet: external|internal, tasklink|record: edit|view)
 *
 * @return {string} Depending on the values specified for the type and displayMode arguments,
 *              returns URL string to an internal NetSuite resource or an external/internal URL to a Suitelet.
 * @exception {SSS_INVALID_URL_CATEGORY}
 * @exception {SSS_CATEGORY_ARG_REQD}
 * @exception {SSS_INVALID_TASK_ID}
 * @exception {SSS_TASK_ID_REQD}
 * @exception {SSS_INVALID_INTERNAL_ID}
 * @exception {SSS_INVALID_EDITMODE_ARG}
 * @since 2007.0
 */
function nlapiResolveURL(type, subtype, id, pageMode) {
}

/**
 * Redirect the user to a page. Only valid in the UI on Suitelets and User Events. In Client scripts this will initialize the redirect URL used upon submit
 *
 * @param {string} type type specifier for URL: suitelet|tasklink|record|mediaitem
 * @param {string} subtype subtype specifier for URL (corresponding to type): scriptid|taskid|recordtype|mediaid
 * @param {string} [id] internal ID specifier (sub-subtype corresponding to type): deploymentid|n/a|recordid|n/a
 * @param {string} [pageMode] string specifier used to configure page (suitelet: external|internal, tasklink|record: edit|view)
 * @param {Object} [parameters] Object used to specify additional URL parameters as name/value pairs
 *
 * @return {void}
 * @exception {SSS_INVALID_ARG}
 * @exception {SSS_INVALID_URL_CATEGORY}
 * @exception {SSS_CATEGORY_ARG_REQD}
 * @exception {SSS_INVALID_TASK_ID}
 * @exception {SSS_TASK_ID_REQD}
 * @exception {SSS_INVALID_INTERNAL_ID}
 * @exception {SSS_INVALID_EDITMODE_ARG}
 * @since 2007.0
 */
function nlapiSetRedirectURL(type, subtype, id, pageMode, parameters) {
}

/**
 * Primary object used to encapsulate an HTTP GET or POST request
 *
 * When creating Suitelets you will pass request and response arguments to your user-defined function.
 * With the request object instantiated, you can then call any nlobjRequest method.
 *
 * @constructor
 */
function nlobjRequest() {
}

/**
 * Return the value of a request parameter
 *
 * @param {string} name parameter name
 *
 * @return {string}
 * @since 2008.2
 */
nlobjRequest.prototype.getParameter = function(name) {
};

/**
 * Return the values of a request parameter as an Array
 *
 * @param {string} name parameter name
 *
 * @return {string[]}
 * @since 2008.2
 */
nlobjRequest.prototype.getParameterValues = function(name) {
};

/**
 * Return an Object containing all the request parameters and their values
 *
 * @return {Object}
 * @since 2008.2
 */
nlobjRequest.prototype.getAllParameters = function() {
};

/**
 * Return the value of a sublist value
 *
 * @param {string} group sublist name
 * @param {string} name  sublist field name
 * @param {int} line  sublist line number
 *
 * @return {string}
 * @since 2008.2
 */
nlobjRequest.prototype.getLineItemValue = function(group, name, line) {
};

/**
 * Return the number of lines in a sublist
 *
 * @param {string} group sublist name
 *
 * @return {int}
 * @since 2008.2
 */
nlobjRequest.prototype.getLineItemCount = function(group) {
};

/**
 * Return the value of a request header
 *
 * @param {string} name
 *
 * @return {string}
 * @since 2008.2
 */
nlobjRequest.prototype.getHeader = function(name) {
};

/**
 * Return an Object containing all the request headers and their values
 *
 * @return {Object}
 * @since 2008.2
 */
nlobjRequest.prototype.getAllHeaders = function() {
};

/**
 * Return the value of an uploaded file
 *
 * Note: 10MB file size limit
 *
 * @param {string} name file field name
 *
 * @return {nlobjFile}
 * @since 2009.1
 */
nlobjRequest.prototype.getFile = function(name) {
};

/**
 * Return an Object containing field names to file objects for all uploaded files
 *
 * @return {Object}
 * @since 2009.1
 */
nlobjRequest.prototype.getAllFiles = function() {
};

/**
 * Return the body of the POST request
 * @return {string}
 *
 * @since 2008.1
 */
nlobjRequest.prototype.getBody = function() {
};

/**
 * Return the URL of the request
 *
 * @return {string}
 *
 * @since 2008.1
 */
nlobjRequest.prototype.getURL = function() {
};

/**
 * Return the METHOD of the request
 *
 * @return {string} 'GET' or 'POST'
 * @since 2008.1
 */
nlobjRequest.prototype.getMethod = function() {
};

/**
 * Return a new instance of nlobjServerResponse.
 *
 * Contains the results of a server response to an outbound Http(s) call.
 *
 * @since 2008.1
 */
function nlobjServerResponse() {
}

/**
 * return the Content-Type header in response
 *
 * @return {string}
 * @since 2008.1
 */
nlobjServerResponse.prototype.getContentType = function() {
};

/**
 * return the value of a header returned.
 *
 * @param {string} name the name of the header to return
 * @return {string|null}
 * @since 2008.1
 */
nlobjServerResponse.prototype.getHeader = function(name) {
};

/**
 * return all the values of a header returned.
 *
 * @param {string} name the name of the header to return
 * @return {string[]|null}
 * @since 2008.1
 */
nlobjServerResponse.prototype.getHeaders = function(name) {
};

/**
 * return an Array of all headers returned.
 *
 * @return {string[]}
 * @since 2008.1
 */
nlobjServerResponse.prototype.getAllHeaders = function() {
};

/**
 * return the response code returned.
 *
 * @return {String} The HTTP response code int as a string
 * @since 2008.1
 */
nlobjServerResponse.prototype.getCode = function() {
};

/**
 * return the response body returned.
 *
 * @return {string}
 * @since 2008.1
 */
nlobjServerResponse.prototype.getBody = function() {
};

/**
 * return the nlobjError thrown via a client call to nlapiRequestURL.
 *
 * When nlapiRequestURL is used on the server side and an error occurs, it will
 * throw an error before returning. As expected.
 *
 * @return {nlobjError}
 * @since 2008.1
 */
nlobjServerResponse.prototype.getError = function() {
};

/**
 * Accessor to Http response made available to Suitelets
 * Return a new instance of nlobjResponse used for scripting web responses in Suitelets
 *
 * @constructor
 */
function nlobjResponse() {
}

/**
 * Add a value for a response header
 *
 * @param  {string} name of header
 * @param  {string} value for header
 *
 * @return  {void}
 * @since 2008.2
 */
nlobjResponse.prototype.addHeader = function(name, value) {
};

/**
 * Set the value of a response header
 *
 * @param  {string} name of header
 * @param  {string} value for header
 *
 * @return  {void}
 * @since 2008.2
 */
nlobjResponse.prototype.setHeader = function(name, value) {
};

/**
 * Return the value of a response header
 *
 * @param {string} name
 *
 * @return  {string}
 * @since 2008.2
 */
nlobjResponse.prototype.getHeader = function(name) {
};

/**
 * Return an Array of all response header values for a header
 *
 * @param  {string} name of header
 *
 * @return  {string[]}
 * @since 2008.2
 */
nlobjResponse.prototype.getHeaders = function(name) {
};

/**
 * Return an object of all response headers
 *
 * @return  {Object}
 * @since 2008.2
 */
nlobjResponse.prototype.getAllHeaders = function() {
};

/**
 * Returns the body returned by the server
 *
 * @return  {string}
 * @since 2008.2
 */
nlobjResponse.prototype.getBody = function() {
};

/**
 * Returns the response code returned by the server
 *
 * @return  {string}
 * @since 2008.2
 */
nlobjResponse.prototype.getCode = function() {
};

/**
 * Returns the nlobjError thrown during request.
 * Only available in the return value of call to nlapiRequestURL in Client SuiteScript.
 *
 * @return  {nlobjError}
 * @since 2008.2
 */
nlobjResponse.prototype.getError = function() {
};

/**
 * Suppress caching for this response
 *
 * @return  {void}
 * @since 2009.1
 */
nlobjResponse.prototype.sendNoCache = function() {
};

/**
 * Sets the content type for the response (and an optional filename for binary output)
 *
 * @param {string} type the file type i.e. plainText, word, pdf, htmldoc (see list of media item types)
 * @param {string} [filename] the file name
 * @param {string} [disposition] Content Disposition used for streaming attachments: inline|attachment
 *
 * @return {void}
 * @since 2008.2
 */
nlobjResponse.prototype.setContentType = function(type, filename, disposition) {
};

/**
 * Sets the redirect URL for the response
 *
 * All URLs must be internal unless the Suitelet is being executed in an "Available without Login" context
 *  at which point it can use type "external" to specify an external url via the subtype arg
 *
 * @param {string} type type specifier for URL: suitelet|tasklink|record|mediaitem|external
 * @param {string} subtype subtype specifier for URL (corresponding to type): scriptid|taskid|recordtype|mediaid|url
 * @param {string} [id] internal ID specifier (sub-subtype corresponding to type): deploymentid|n/a|recordid|n/a
 * @param {string} [pageMode] string specifier used to configure page (suitelet: external|internal, tasklink|record: edit|view)
 * @param {Object} [parameters] Object used to specify additional URL parameters as name/value pairs
 *
 * @return {void}
 * @since 2008.2
 */
nlobjResponse.prototype.sendRedirect = function(type, subtype, id, pageMode, parameters) {
};

/**
 * Write information (text/xml/html/pdf) to the response
 *
 * @param {string|nlobjFile} output
 * @return {void}
 * @since 2008.2
 */
nlobjResponse.prototype.write = function(output) {
};

/**
 * Write line information (text/xml/html) to the response
 *
 * @param {string} output
 * @return {void}
 * @since 2008.2
 */
nlobjResponse.prototype.writeLine = function(output) {
};

/**
 * Write a UI object page
 *
 * @param {nlobjList|nlobjAssistant|nlobjForm} pageObject
 *
 * @return {void}
 * @since 2008.2
 */
nlobjResponse.prototype.writePage = function(pageObject) {
};

/**
 * Sets the character encoding for the response
 *
 * @param {string} encoding
 *
 * @return {void}
 * @since 2012.2
 */
nlobjResponse.prototype.setEncoding = function(encoding) {
};

/**
 * Generates a PDF directly to a response
 *
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param {string} xmlString string containing BFO compliant XHTML
 *
 * @return {void}
 * @since 2014.2
 */
nlobjResponse.prototype.renderPDF = function(xmlString) {
};
