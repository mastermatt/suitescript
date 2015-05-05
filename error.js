/**
 * SuiteScript Error Handling APIs
 */


/**
 * Create an nlobjError object that can be used to abort script execution and configure error notification
 * This API is supported in user event, scheduled, portlet, and Suitelet scripts.
 *
 * @param {string} code error code
 * @param {string} details error description
 * @param {boolean} [suppressEmail=false] if true then suppress the error notification emails from being sent out
 *
 * @return {nlobjError}
 * @since 2008.2
 */
function nlapiCreateError(code, details, suppressEmail) {
}

/**
 * Encapsulation of errors thrown during script execution
 * Return a new instance of nlobjError used system or user-defined error object
 *
 * @constructor
 */
function nlobjError() {
}

/**
 * Return the error db ID for this error (if it was an unhandled unexpected error)
 *
 * @return {string}
 * @since 2008.2
 */
nlobjError.prototype.getId = function() {
};

/**
 * Return the error code for this system or user-defined error
 *
 * @return {string}
 * @since 2008.2
 */
nlobjError.prototype.getCode = function() {
};

/**
 * Return the error description for this error
 *
 * @return {string}
 * @since 2008.2
 */
nlobjError.prototype.getDetails = function() {
};

/**
 * Return a stacktrace containing the location of the error
 *
 * @return {string[]}
 * @since 2008.2
 */
nlobjError.prototype.getStackTrace = function() {
};

/**
 * Return the userevent script name where this error was thrown
 *
 * @return {string}
 * @since 2008.2
 */
nlobjError.prototype.getUserEvent = function() {
};

/**
 * Return the internalid of the record if this error was thrown in an aftersubmit script
 *
 * @return {int}
 * @since 2008.2
 */
nlobjError.prototype.getInternalId = function() {
};
