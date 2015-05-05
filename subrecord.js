/**
 * SuiteScript Subrecord APIs
 *
 * The subrecord APIs that contain “LineItem” are for creating and working with subrecords from a sublist field
 *  on the parent record. The APIs that do not have “LineItem” in the name are for creating and working
 *  with subrecords from a body field on the parent record.
 *
 * Note that most of the functions listed below return an nlobjSubrecord object. After creating or editing a subrecord,
 *  you must save your changes using the nlobjSubrecord.commit() method. You must then save the subrecord’s parent
 *  record using nlapiSubmitRecord(record, doSourcing, ignoreMandatoryFields). If you do not commit both the subrecord
 *  and the parent record, all changes to the subrecord are lost.
 *
 * Important: Subrecords are used in the context of the Advanced Bin / Numbered Inventory Management feature.
 *  Currently, the only supported subrecord in NetSuite is the Inventory Details subrecord.
 */


/**
 * Create a subrecord on body field on the current record on a page
 *
 * @restriction supported in client and user event scripts only
 *
 * @param {string} fieldName body field name
 *
 * @return {nlobjSubrecord}
 * @since 2011.2
 */
function nlapiCreateSubrecord(fieldName) {
}

/**
 * Edit a subrecord on body field on the current record on a page
 *
 * @restriction supported in client and user event scripts only
 *
 * @param {string} fieldName body field name
 *
 * @return {nlobjSubrecord}
 * @since 2011.2
 */
function nlapiEditSubrecord(fieldName) {
}

/**
 * Remove a subrecord on body field on the current record on a page
 *
 * @restriction supported in client and user event scripts only
 *
 * @param {string} fieldName body field name
 *
 * @return {void}
 * @since 2011.2
 */
function nlapiRemoveSubrecord(fieldName) {
}

/**
 * view a subrecord on body field on the current record on a page
 * @restriction supported in client and user event scripts only
 * @param {string} fieldName body field name
 * @return {nlobjSubrecord}
 * @since 2011.2
 */
function nlapiViewSubrecord(fieldName) {
}

/**
 * Create a subrecord on a sublist field on the current record on a page
 * @restriction supported in client and user event scripts only
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @return {nlobjSubrecord}
 * @since 2011.2
 */
function nlapiCreateCurrentLineSubrecord(type, fieldName) {
}

/**
 * view a subrecord on a sublist field on the current record on a page
 * @restriction supported in client and user event scripts only
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @return {nlobjSubrecord}
 * @since 2011.2
 */
function nlapiViewCurrentLineItemSubrecord(type, fieldName) {
}

/**
 * Edit a subrecord on a sublist field on the current record on a page
 * @restriction supported in client and user event scripts only
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @return {nlobjSubrecord}
 * @since 2011.2
 */
function nlapiEditCurrentLineItemSubrecord(type, fieldName) {
}

/**
 * Remove a subrecord on a sublist field on the current record on a page
 * @restriction supported in client and user event scripts only
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @return {void}
 * @since 2011.2
 */
function nlapiRemoveCurrentLineItemSubrecord(type, fieldName) {
}

/**
 * view a subrecord on a sublist field on the current record on a page
 * @restriction supported in client and user event scripts only
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {int} linenum line number (1-based)
 * @return {nlobjSubrecord}
 * @since 2011.2
 */
function nlapiViewLineItemSubrecord(type, fieldName, linenum) {
}

/**
 * Primary object used to encapsulate a NetSuite subrecord
 *
 * To create a subrecord, you must first create or load a parent record. You can then create or access a subrecord
 * from a body field or from a sublist field on the parent record
 *
 * Important: Subrecords are currently supported only in the context of the new Advanced Bin / Numbered Inventory
 * Management feature
 */
function nlobjSubrecord() {
}

/**
 * Commit the subrecord after you finish modifying it
 *
 * @return {void}
 * @since 2008.1
 */
nlobjSubrecord.prototype.commit = function() {
};

/**
 * Cancel the any modification on subrecord
 *
 * Use this method to cancel the current processing of the subrecord and revert subrecord data to
 * the last committed change (submitted in the last commit() call)
 *
 * Note that you will not be able to do any additional write or read operations on the subrecord
 * Instance after you have canceled it. You must reload the subrecord from the parent to write any
 * Additional data to the subrecord
 *
 * @return {void}
 * @since 2008.1
 */
nlobjSubrecord.prototype.cancel = function() {
};
