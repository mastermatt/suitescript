/**
 * SuiteScript Record APIs
 *
 * When you work with Record APIs, you are doing things such as creating, deleting, copying,
 *  or loading all elements of a record.
 *
 * Whether you are working with standard NetSuite records (for example, Sale Order, Invoice, Customer, Vendor)
 *  or custom records you have created using SuiteBuilder, you will use all the same Record APIs
 *  to interact with the record object.
 */


/**
 * Attach a single record to another with optional properties
 *
 * @governance 10 units
 *
 * @param {string} type1 The record type name being attached
 * @param {int} id1 The internal ID for the record being attached
 * @param {string} type2 The record type name being attached to
 * @param {int} id2 The internal ID for the record being attached to
 * @param {Object} [properties] Object containing name/value pairs used to configure attach operation
 *
 * @return {void}
 * @since 2008.2
 */
function nlapiAttachRecord(type1, id1, type2, id2, properties) {
}

/**
 * Return a new record using values from an existing record
 * @governance 10 units for transactions, 2 for custom records, 5 for all other records
 *
 * @param {string} type The record type name
 * @param {int} id The internal ID for the record
 * @param {Object} [initializeValues] Contains an array of name/value pairs of defaults to be used during record initialization
 *
 * @return {nlobjRecord} Returns an nlobjRecord object of a copied record
 * @since 2007.0
 */
function nlapiCopyRecord(type, id, initializeValues) {
}

/**
 * Initializes a new record and returns an nlobjCSVImport object.
 *
 * You can then use the methods available on the returned record object to populate the object with the desired
 *  information. Next, you can pass this object to nlapiSubmitCSVImport(nlobjCSVImport), which asynchronously
 *  imports the data from the returned object into NetSuite.
 *
 * Note that this API cannot be used to import data that is imported by simple (2-step) assistants in the UI,
 *  because these import types do not support saved import maps. This limitation applies to budget, single journal
 *  entry, single inventory worksheet, project tasks, and Web site redirects imports.
 *
 * Warning: This API is only supported for bundle installation scripts, scheduled scripts, and RESTlets.
 * If you attempt to execute this API in another type of script, an error is returned.
 *
 * @return {nlobjCSVImport}
 * @since 2012.2
 */
function nlapiCreateCSVImport() {
}

/**
 * Instantiate a new nlobjRecord object containing all the default field data for that record type
 *
 * @governance 10 units for transactions, 2 for custom records, 5 for all other records
 *
 * @param {string} type record type ID
 * @param {Object} [initialValues] Contains an array of name/value pairs of defaults to be used during record initialization
 *
 * @return {nlobjRecord} A new record from the system
 * @exception {SSS_INVALID_RECORD_TYPE}
 * @exception {SSS_TYPE_ARG_REQD}
 * @since 2007.0
 */
function nlapiCreateRecord(type, initialValues) {
}

/**
 * Delete a record from the system
 *
 * Warning: Use caution when using the nlapiDeleteRecord function in SuiteScript.
 *  Records deleted using nlapiDeleteRecord are permanently deleted from the NetSuite database.
 *
 * @governance 20 units for transactions, 4 for custom records, 10 for all other records
 *
 * @param {string} type The record type name
 * @param {int} id The internal ID for the record
 *
 * @return {void}
 *
 * @exception {SSS_INVALID_RECORD_TYPE}
 * @exception {SSS_TYPE_ARG_REQD}
 * @exception {SSS_INVALID_INTERNAL_ID}
 * @exception {SSS_ID_ARG_REQD}
 * @since 2007.0
 */
function nlapiDeleteRecord(type, id) {
}

/**
 * Detach a single record from another with optional properties
 * @governance 10 units
 *
 * @param {string} type1 The record type name being attached
 * @param {int} id1 The internal ID for the record being attached
 * @param {string} type2 The record type name being attached to
 * @param {int} id2 The internal ID for the record being attached to
 * @param {Object} [properties] Object containing name/value pairs used to configure detach operation
 *
 * @return {void}
 * @since 2008.2
 */
function nlapiDetachRecord(type1, id1, type2, id2, properties) {
}

/**
 * Return an record object containing the data being submitted to the system for the currenr record
 *
 * @restriction User Event scripts only
 *
 * @return {nlobjRecord}
 * @since 2008.1
 */
function nlapiGetNewRecord() {
}

/**
 * Return an record object containing the current record's data prior to the write operation
 * @restriction beforeSubmit|afterSubmit User Event scripts only
 *
 * @return {nlobjRecord}
 * @since 2008.1
 */
function nlapiGetOldRecord() {
}

/**
 * Return the internal ID corresponding to the current page or userevent script
 *
 * @return {string} a string of digits
 * @since 2007.0
 */
function nlapiGetRecordId() {
}

/**
 * Return the recordtype corresponding to the current page or userevent script
 *
 * @return {string}
 * @since 2007.0
 */
function nlapiGetRecordType() {
}

/**
 * Load an existing record from the system
 * @governance 10 units for transactions, 2 for custom records, 5 for all other records
 *
 * @param {string} type The record type name
 * @param {int} id The internal ID for the record
 * @param {Object} [initializeValues] Contains an array of name/value pairs of defaults to be used during record initialization
 *
 * @return {nlobjRecord} Returns an nlobjRecord object of an existing NetSuite record
 *
 * @exception {SSS_INVALID_RECORD_TYPE}
 * @exception {SSS_TYPE_ARG_REQD}
 * @exception {SSS_INVALID_INTERNAL_ID}
 * @exception {SSS_ID_ARG_REQD}
 * @since 2007.0
 */
function nlapiLoadRecord(type, id, initializeValues) {
}

/**
 * Perform a mail merge operation using any template and up to 2 records and returns an nlobjFile with the results
 *
 * @restriction only supported for record types that are available in mail merge: transactions, entities, custom records, and cases
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param {int} id internal ID of template
 * @param {string} baseType primary record type
 * @param {int} baseId internal ID of primary record
 * @param {string} [altType] secondary record type
 * @param {int} [altId] internal ID of secondary record
 * @param {Object} [fields] Object of merge field values to use in the mail merge
 *          (by default all field values are obtained from records) which overrides those from the record
 *
 * @return {nlobjFile}
 * @since 2008.2
 */
function nlapiMergeRecord(id, baseType, baseId, altType, altId, fields) {
}

/**
 * Submits a CSV import job to asynchronously import record data into NetSuite. This API can be used to:
 *      • Automate standard record data import for SuiteApp installations, demo environments, and testing environments.
 *      • Import data on a schedule using a scheduled script.
 *      • Build integrated CSV imports with RESTlets.
 *
 * When the API is executed, the import job is added to the queue.
 * The progress of an import job can be viewed at Setup > Import/Export > View CSV Import Status.
 *
 * Note that this API cannot be used to import data that is imported by simple (2-step) assistants in the UI,
 *  because these import types do not support saved import maps. This limitation applies to budget, single
 *  journal entry, single inventory worksheet, project tasks, and Web site redirects imports.
 *
 *  This API is only supported for bundle installation scripts, scheduled scripts, and RESTlets.
 *  If you attempt to execute this API in another type of script, an error is returned.
 *
 * @governance 100 units
 *
 * @param {nlobjCSVImport} nlobjCSVImport
 *
 * @return {string} job ID
 * @since 2012.2
 */
function nlapiSubmitCSVImport(nlobjCSVImport) {
}

/**
 * Submit a record to the system for creation or update
 *
 * @governance 20 units for transactions, 4 for custom records, 10 for all other records
 *
 * @param {nlobjRecord} record nlobjRecord object containing the data record
 * @param {boolean} [doSourcing=false] If not set, this argument defaults to false
 * @param {boolean} [ignoreMandatoryFields] Disables mandatory field validation for this submit operation
 *
 * @return {string} Internal ID for committed record
 *
 * @exception {SSS_INVALID_RECORD_OBJ}
 * @exception {SSS_RECORD_OBJ_REQD}
 * @exception {SSS_INVALID_SOURCE_ARG}
 * @since 2007.0
 */
function nlapiSubmitRecord(record, doSourcing, ignoreMandatoryFields) {
}

/**
 * Create a new record using values from an existing record of a different type
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 *
 * @param {string} type The type of the existing record
 * @param {int} id The internal ID for the existing record
 * @param {string} transformType The expected record type of the new object
 * @param {Object} [transformValues] An object containing transform default option/value
 *                      pairs used to pre-configure transformed record
 *
 * @return {nlobjRecord}
 *
 * @exception {SSS_INVALID_URL_CATEGORY}
 * @exception {SSS_CATEGORY_ARG_REQD}
 * @exception {SSS_INVALID_TASK_ID}
 * @exception {SSS_TASK_ID_REQD}
 * @exception {SSS_INVALID_INTERNAL_ID}
 * @exception {SSS_INVALID_EDITMODE_ARG}
 * @since 2007.0
 */
function nlapiTransformRecord(type, id, transformType, transformValues) {
}

/**
 * Print a record (transaction) given its type, id, and output format
 *
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param {string} type print output type: transaction|statement|packingslip|pickingticket
 * @param {int} id internal ID of record to print
 * @param {string} [format] output format: html|pdf|default
 * @param {Object} [properties] Object of properties used to configure print
 * @return {nlobjFile}
 * @since 2008.2
 */
function nlapiPrintRecord(type, id, format, properties) {
}

/**
 * Primary object used to encapsulate a CSV import job.
 *  This object is passed as a parameter by nlapiSubmitCSVImport(nlobjCSVImport), which is used
 *  to asynchronously import record data into NetSuite.
 *
 * Use nlapiCreateCSVImport( ) to return an nlobjCSVImport object.
 *  You can then use the object’s methods to populate it with the desired information.
 *
 * Warning: You should execute setMapping(savedImport) before any of the other methods.
 *  If you try to first execute setPrimaryFile(file), an error is returned.
 *
 * @constructor
 */
function nlobjCSVImport() {
}

/**
 * Sets the data to be imported in a linked file for a multi-file import job, by referencing a file
 *  in the file cabinet using nlapiLoadFile, or by inputting CSV data as raw string.
 *
 * If an import job requires multiple linked files, this method can be executed multiple times,
 *  once for each linked file.
 *
 * @param {string} file Can be one of the following:
 *      • The internal ID, as shown in the file cabinet, of the CSV file containing data to be imported,
 *          referenced by nlapiLoadFile, preceded by an identifier for the record sublist for which data
 *          is being imported. For example: setLinkedFile(“item”, nlapiLoadFile(74))
 *
 *      • Raw string of the data to be imported.
 *
 * @return {void}
 * @since 2012.2
 */
nlobjCSVImport.prototype.setLinkedFile = function(file) {
};

/**
 * Sets the name of the saved import map to be used for an import, by referencing the internal ID
 *  or script ID of the import map.
 *
 * @param {string} savedImport The internal ID or script ID of the saved mapping to use for the import job.
 *                                  The internal ID is system-defined and is displayed in the ID column
 *                                  at Setup > Import/Export > Saved CSV Imports. The script ID can be defined
 *                                  in the Import Assistant and is also displayed on this page.
 *
 * @return {void}
 * @since 2012.2
 */
nlobjCSVImport.prototype.setMapping = function(savedImport) {
};

/**
 * Sets the name of the import job to be shown on the status page for CSV imports
 *
 * @param {string} jobName The text to be displayed in the Job Name column
 *                                  at Setup > Import/Export > View CSV Import Status.
 *                                  The default job name format is:
 *                                  <import type> - <csv file name> - <email address of logged-in user>.
 *
 * @return {void}
 * @since 2012.2
 */
nlobjCSVImport.prototype.setOption = function(jobName) {
};

/**
 * Sets the data to be imported in the primary file for an import job, by referencing a file
 * in the file cabinet using nlapiLoadFile, or by inputting CSV data as raw string.
 *
 * @param {string} file Can be one of the following:
 *      • The internal ID, as shown in the file cabinet, of the CSV file containing data to be imported,
 *          referenced by nlapiLoadFile, preceded by an identifier for the record sublist for which data
 *          is being imported. For example: setPrimaryFile(“item”, nlapiLoadFile(74))
 *
 *      • Raw string of the data to be imported.
 *
 * @return {void}
 * @since 2012.2
 */
nlobjCSVImport.prototype.setPrimaryFile = function(file) {
};

/**
 * Class definition for business records in the system
 * Return a new instance of nlobjRecord used for accessing and manipulating record objects
 *
 * @constructor
 * @since 2008.2
 */
function nlobjRecord() {
}

/**
 * Return the internalId of the record or NULL for new records
 *
 * @return {int} Returns the integer value of the record ID
 * @since 2008.1
 */
nlobjRecord.prototype.getId = function() {
};

/**
 * Return the recordType corresponding to this record
 *
 * @return {string} The string value of the record name internal ID
 * @since 2008.1
 */
nlobjRecord.prototype.getRecordType = function() {
};

/**
 * Return field metadata for field
 *
 * @param {string} fieldName field name
 *
 * @return {nlobjField}
 * @since 2009.1
 */
nlobjRecord.prototype.getField = function(fieldName) {
};

/**
 * Return sublist metadata for sublist
 *
 * @param {string} type sublist name
 *
 * @return {nlobjSubList}
 * @since 2009.2
 */
nlobjRecord.prototype.getSubList = function(type) {
};

/**
 * Return field metadata for field
 *
 * @param {string} type matrix sublist name
 * @param {string} fieldName matrix field name
 * @param {int} column linenum matrix column (1-based)
 *
 * @return {nlobjField}
 * @since 2009.2
 */
nlobjRecord.prototype.getMatrixField = function(type, fieldName, column) {
};

/**
 * Return metadata for sublist field
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {int} [linenum] line number (1-based). If empty, the current sublist field is returned.
 *                  only settable for sublists of type list
 *
 * @return {nlobjField}
 * @since 2009.2
 */
nlobjRecord.prototype.getLineItemField = function(type, fieldName, linenum) {
};

/**
 * Return metadata for sublist field
 *
 * @param {string} group matrix sublist name
 * @param {string} fieldName matrix field name
 * @param {int} linenum line number
 * @param {int} column linenum matrix column (1-based)
 *
 * @return {nlobjField}
 * @since 2009.2
 */
nlobjRecord.prototype.getLineItemMatrixField = function(group, fieldName, linenum, column) {
};

/**
 * Use this API to get the value of a matrix field that appears on a specific line in a specific column.
 *
 * This API can be used only in the context of a matrix sublist.
 *
 * Note: Currently the Pricing sublist is the only matrix sublist type that supports SuiteScript.
 *
 * @param {string} group matrix sublist name
 * @param {string} fieldName matrix field name
 * @param {int} linenum line number
 * @param {int} column linenum matrix column (1-based)
 *
 * @return {string}
 * @since 2009.2
 */
nlobjRecord.prototype.getLineItemMatrixValue = function(group, fieldName, linenum, column) {
};

/**
 * Set the value of a field
 *
 * @param {string} name field name
 * @param {string} value field value
 *
 * @return {void}
 * @since 2008.1
 */
nlobjRecord.prototype.setFieldValue = function(name, value) {
};

/**
 * Set the values of a multi-select field
 *
 * @param {string} name field name
 * @param {string[]} values string array containing field values
 *
 * @since 2008.1
 */
nlobjRecord.prototype.setFieldValues = function(name, values) {
};

/**
 * Return the value of a field
 *
 * @param {string} name field name
 *
 * @return {string}
 * @since 2008.1
 */
nlobjRecord.prototype.getFieldValue = function(name) {
};

/**
 * Return the selected values of a multi-select field as an Array
 *
 * @param {string} name field name
 *
 * @return {string[]}
 * @since 2008.1
 */
nlobjRecord.prototype.getFieldValues = function(name) {
};

/**
 * Set the value (via display value) of a select field
 * @restriction only supported for select fields
 *
 * @param {string} name field name
 * @param {string} text field display value
 *
 * @return {void}
 * @since 2008.2
 */
nlobjRecord.prototype.setFieldText = function(name, text) {
};

/**
 * Set the values (via display values) of a multi-select field
 * @restriction only supported for multi-select fields
 *
 * @param {string} name field name
 * @param {string[]} texts array of field display values
 *
 * @return {void}
 * @since 2008.2
 */
nlobjRecord.prototype.setFieldTexts = function(name, texts) {
};

/**
 * Return the display value for a select field
 * @restriction only supported for select fields
 *
 * @param {string} name field name
 *
 * @return {string}
 * @since 2008.2
 */
nlobjRecord.prototype.getFieldText = function(name) {
};

/**
 * Return the selected display values of a multi-select field as an Array
 *
 * @restriction only supported for multi-select fields
 *
 * @param {string} name field name
 * @return {string[]}
 * @since 2008.2
 */
nlobjRecord.prototype.getFieldTexts = function(name) {
};

/**
 * Get the value of a matrix header field
 *
 * Important: Currently the Pricing sublist is the only matrix sublist type that supports
 * SuiteScript. For details on working with the Pricing sublist, see Pricing Sublist in the NetSuite
 * Help Center
 *
 * @param {string} type matrix sublist name
 * @param {string} name    matrix field name
 * @param {int} column matrix column index (1-based)
 *
 * @return {string}
 * @since 2009.2
 */
nlobjRecord.prototype.getMatrixValue = function(type, name, column) {
};

/**
 * Set the value of a matrix header field
 *
 * @param {string} type matrix sublist name
 * @param {string} name    matrix field name
 * @param {int} column matrix column index (1-based)
 * @param {string} value field value
 *
 * @return {void}
 * @since 2009.2
 */
nlobjRecord.prototype.setMatrixValue = function(type, name, column, value) {
};

/**
 * Return an array of all field names on the record
 *
 * @return {string[]}
 * @since 2008.1
 */
nlobjRecord.prototype.getAllFields = function() {
};

/**
 *
 * @param sublist
 * @param fieldName
 */
nlobjRecord.prototype.viewItemSubrecord = function(sublist, fieldName) {
};

/**
 * Return an Array of all field names on a record for a particular sublist
 *
 * @param {string} group sublist name
 *
 * @return {string[]}
 * @since 2008.2
 */
nlobjRecord.prototype.getAllLineItemFields = function(group) {
};

/**
 * Set the value of a sublist field
 *
 * @param {string} group sublist name
 * @param {string} name sublist field name
 * @param {int} line line number (1-based)
 * @param {string|int} value sublist field value
 *
 * @return {void}
 * @since 2008.1
 */
nlobjRecord.prototype.setLineItemValue = function(group, name, line, value) {
};

/**
 * Set the value of a sublist field
 *
 * @param {string} group sublist name
 * @param {string} name sublist field name
 * @param {int} line line number (1-based)
 * @param {string} value datetime value
 *
 * @return {void}
 * @since 2013.2
 */
nlobjRecord.prototype.setLineItemDateTimeValue = function(group, name, line, value) {
};

/**
 * Set the value of a sublist field
 *
 * @param {string} group sublist name
 * @param {string} name sublist field name
 * @param {int} line line number (1-based)
 * @param {string} value datetime value
 * @param {string} timezone value
 *
 * @return {void}
 * @since 2013.2
 */
nlobjRecord.prototype.setLineItemDateTimeValue = function(group, name, line, value, timezone) {
};

/**
 * Return the value of a sublist field
 *
 * @param {string} group sublist name
 * @param {string} name sublist field name
 * @param {int} line line number (1-based)
 *
 * @return {string}
 * @since 2008.1
 */
nlobjRecord.prototype.getLineItemValue = function(group, name, line) {
};

/**
 * Returns the values of a multiselect sublist field on a selected line. One example of a multiselect
 *  sublist field is the Serial Numbers field on the Items sublist.
 *
 * This function is not supported in client SuiteScript. It is meant to be used in user event scripts
 *
 * @param {string} group The sublist internal ID (for example, use addressbook as the ID for the Address sublist)
 * @param {string} name The internal ID of the multiselect field
 * @param {int} line linenum number (1-based)
 *
 * @return {string[]} An array of string values for the multiselect sublist field
 * @since 2012.1
 */
nlobjRecord.prototype.getLineItemValues = function(group, name, line) {
};

/**
 * Return the value of a sublist field
 *
 * @param {string} group sublist name
 * @param {string} name sublist field name
 * @param {int} line line number (1-based)
 * @param {string} [timezone] value
 *
 * @return {void}
 * @since 2013.2
 */
nlobjRecord.prototype.getLineItemDateTimeValue = function(group, name, line, timezone) {
};

/**
 * Return the text value of a sublist field
 *
 * @param {string} group sublist name
 * @param {string} name sublist field name
 * @param {int} line line number (1-based)
 *
 * @return {string}
 * @since 2008.2
 */
nlobjRecord.prototype.getLineItemText = function(group, name, line) {
};

/**
 * Set the current value of a sublist field
 *
 * @param {string} group sublist name
 * @param {string} name sublist field name
 * @param {string|int} value sublist field value
 *
 * @return {void}
 * @since 2009.2
 */
nlobjRecord.prototype.setCurrentLineItemValue = function(group, name, value) {
};

/**
 * Set the current value of a sublist field using the display name
 *
 * @param {string} group sublist name
 * @param {string} name sublist field name
 * @param {string} value sublist field value
 *
 * @return {void}
 * @since 2009.2
 */
nlobjRecord.prototype.setCurrentLineItemText = function(group, name, value) {
};

/**
 * Set the current value of a sublist field
 *
 * @param {string} group sublist name
 * @param {string} name sublist field name
 * @param {string} value sublist field value
 * @param {string} [timezone] value
 *
 * @return {void}
 * @since 2013.2
 */
nlobjRecord.prototype.setCurrentLineItemDateTimeValue = function(group, name, value, timezone) {
};

/**
 * Returns the values of a multiselect sublist field on the currently selected line.
 * One example of a multiselect sublist field is the Serial Numbers field on the Items sublist.
 *
 * This function is not supported in client SuiteScript. It is meant to be used in user event scripts.
 *
 * @param {string} group The sublist internal ID (for example, use addressbook as the ID for the Address sublist)
 * @param {string} name The name of the multiselect field
 *
 * @return {string[]}
 * @since 2012.1
 */
nlobjRecord.prototype.getCurrentLineItemValues = function(group, name) {
};

/**
 * Return the current value of a sublist field
 *
 * @param {string} group sublist name
 * @param {string} name sublist field name
 * @param {string} [timezone] value
 *
 * @return {string}
 * @since 2013.2
 */
nlobjRecord.prototype.getCurrentLineItemDateTimeValue = function(group, name, timezone) {
};

/**
 * Return the current value of a sublist field
 *
 * @param {string} group sublist name
 * @param {string} name sublist field name
 *
 * @return {string}
 * @since 2009.2
 */
nlobjRecord.prototype.getCurrentLineItemValue = function(group, name) {
};

/**
 * Return the current display value of a sublist field
 *
 * @param {string} group sublist name
 * @param {string} name sublist field name
 *
 * @return {string}
 * @since 2009.2
 */
nlobjRecord.prototype.getCurrentLineItemText = function(group, name) {
};

/**
 * Set the current value of a sublist matrix field
 *
 * @param {string} group matrix sublist name
 * @param {string} name matrix field name
 * @param {int} column matrix field column index (1-based)
 * @param {string} value matrix field value
 *
 * @return {void}
 * @since 2009.2
 */
nlobjRecord.prototype.setCurrentLineItemMatrixValue = function(group, name, column, value) {
};

/**
 * Return the current value of a sublist matrix field
 *
 * @param {string} group matrix sublist name
 * @param {string} name matrix field name
 * @param {int} column matrix field column index (1-based)
 *
 * @return {string}
 * @since 2009.2
 */
nlobjRecord.prototype.getCurrentLineItemMatrixValue = function(group, name, column) {
};

nlobjRecord.prototype.createSubrecord = function(fieldName) {
};

nlobjRecord.prototype.viewSubrecord = function(fieldName) {
};

nlobjRecord.prototype.editSubrecord = function(fieldName) {
};

nlobjRecord.prototype.removeSubrecord = function(fieldName) {
};

nlobjRecord.prototype.createCurrentLineItemSubrecord = function(sublist, fieldName) {
};

nlobjRecord.prototype.viewCurrentItemSubrecord = function(sublist, fieldName) {
};

nlobjRecord.prototype.editCurrentLineItemSubrecord = function(sublist, fieldName) {
};

nlobjRecord.prototype.removeCurrentLineItemSubrecord = function(sublist, fieldName) {
};

/**
 * Return the number of columns for a matrix field
 *
 * @param {string} group matrix sublist name
 * @param {string} name matrix field name
 *
 * @return {int}
 * @since 2009.2
 */
nlobjRecord.prototype.getMatrixCount = function(group, name) {
};

/**
 * Return the number of lines in a sublist
 *
 * @param {string} group sublist name
 *
 * @return {int}
 * @since 2009.2
 */
nlobjRecord.prototype.getLineItemCount = function(group) {
};

/**
 * Return line number for 1st occurrence of field value in a sublist column
 *
 * @param {string} group    sublist name
 * @param {string} fieldName    sublist field name
 * @param {string} value    sublist field value
 *
 * @return {int}
 * @since 2009.2
 */
nlobjRecord.prototype.findLineItemValue = function(group, fieldName, value) {
};

/**
 * Return line number for 1st occurrence of field value in a sublist column
 *
 * @param {string} group    sublist name
 * @param {string} fieldName    sublist field name
 * @param {int} column  matrix column index (1-based)
 * @param {string} value    matrix field value
 *
 * @return {int}
 * @since 2009.2
 */
nlobjRecord.prototype.findLineItemMatrixValue = function(group, fieldName, column, value) {
};

/**
 * Insert a new line into a sublist
 *
 * @param {string} group sublist name
 * @param {int} [line] line index at which to insert line
 *
 * @return {void}
 * @since 2009.2
 */
nlobjRecord.prototype.insertLineItem = function(group, line) {
};

/**
 * Remove an existing line from a sublist
 *
 * @param {string} group sublist name
 * @param {int} [line] line number to remove
 *
 * @return {void}
 * @since 2009.2
 */
nlobjRecord.prototype.removeLineItem = function(group, line) {
};

/**
 * Insert and select a new line in a sublist
 *
 * @param {string} group sublist name
 *
 * @return {void}
 * @since 2009.2
 */
nlobjRecord.prototype.selectNewLineItem = function(group) {
};

/**
 * Select an existing line in a sublist
 *
 * @param {string} group sublist name
 * @param {int} line  line number to select
 *
 * @return {void}
 * @since 2009.2
 */
nlobjRecord.prototype.selectLineItem = function(group, line) {
};

/**
 * Commit the current line in a sublist
 *
 * @param {string} group sublist name
 *
 * @return {void}
 * @since 2009.2
 */
nlobjRecord.prototype.commitLineItem = function(group) {
};

/**
 * Cancels any uncommitted changes to the current line of a sublist
 *
 * @param {string} group The sublist internal ID
 *                  (for example, use addressbook as the ID for the Address sublist)
 *
 * @return {void}
 */
nlobjRecord.prototype.cancelLineItem = function(group) {
};

/**
 * Set the value of a field
 *
 * @param {string} name field name
 * @param {string} value field value
 * @param {string} [timezone] Olson value
 *
 * @return {void}
 * @since 2013.2
 */
nlobjRecord.prototype.setDateTimeValue = function(name, value, timezone) {
};

/**
 * Return the value of a field on the current record on a page
 *
 * @restriction supported in client and user event scripts only
 *
 * @param {string} fieldName the field name
 * @param {string} [timezone] Olson value
 *
 * @return {string}
 * @since 2013.2
 */
nlobjRecord.prototype.getDateTimeValue = function(fieldName, timezone) {
};
