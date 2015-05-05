/**
 * SuiteScript Sublist APIs
 *
 * Sublists contain a list of references to other records. Note that the list of record references are referred
 * to as line items. Within NetSuite there are four types of sublists: editor, inline editor, list, and static list.
 */


/**
 * Cancel any changes made on the currently selected line
 * @restriction Only supported for sublists of type inlineeditor and editor
 *
 * @param {string} type sublist name
 * @return {void}
 * @since 2005.0
 */
function nlapiCancelLineItem(type) {
}

/**
 * Save changes made on the currently selected line to the sublist
 *
 * @param {string} type sublist name
 * @return {void}
 * @since 2005.0
 */
function nlapiCommitLineItem(type) {
}

/**
 * Sets the given line item field of a sublist to disabled or enabled
 *
 * @param {string} type The sublist internal ID (for example, use addressbook as the ID for the Address sublist)
 * @param {string} fieldName The name of the line item field to enable/disable
 * @param {boolean} value If set to true the field is disabled. If set to false it is enabled
 *
 * @return {void}
 */
function nlapiDisableLineItemField(type, fieldName, value) {
}

/**
 * Return the 1st line number that a matrix field value appears in
 *
 * @param {string} type sublist name
 * @param {string} fieldName matrix field name
 * @param {int} column matrix column index (1-based)
 * @param {string} val the value being queried for in a matrix field
 * @return {int}
 * @since 2009.2
 */
function nlapiFindLineItemMatrixValue(type, fieldName, column, val) {
}

/**
 * Return the 1st line number that a sublist field value appears in
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {string} val the value being queried for in a sublist field
 * @return {int}
 * @since 2009.2
 */
function nlapiFindLineItemValue(type, fieldName, val) {
}

/**
 * Return the value of a field on the currently selected line
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {string} [timezone] value
 *
 * @return {string}
 * @since 2013.2
 */
function nlapiGetCurrentLineItemDateTimeValue(type, fieldName, timezone) {
}

/**
 * Return the line number for the currently selected line
 *
 * @param {string} type sublist name
 *
 * @return {int}
 * @since 2005.0
 */
function nlapiGetCurrentLineItemIndex(type) {
}

/**
 * Get the current value of a sublist field on the current record on a page
 * @restriction supported in client and user event scripts only
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {int} column matrix column index (1-based)
 * @return {string} value
 * @since 2009.2
 */
function nlapiGetCurrentLineItemMatrixValue(type, fieldName, column) {
}

/**
 * Return the label of a select field's current selection on the currently selected line
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 *
 * @return {string}
 * @since 2005.0
 */
function nlapiGetCurrentLineItemText(type, fieldName) {
}

/**
 * Return the value of a field on the currently selected line
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @return {string}
 * @since 2005.0
 */
function nlapiGetCurrentLineItemValue(type, fieldName) {
}

/**
 * Returns the values of a multiselect sublist field on the currently selected line.
 * One example of a multiselect sublist field is the Serial Numbers field on the Items sublist.
 *
 * This function is not supported in client SuiteScript. It is meant to be used in user event scripts.
 *
 * @param {string} type The sublist internal ID (for example, use addressbook as the ID for the Address sublist)
 * @param {string} fieldName The name of the multiselect field
 *
 * @return {string[]}
 * @since 2012.1
 */
function nlapiGetCurrentLineItemValues(type, fieldName) {
}

/**
 * Return the number of sublists in a sublist on the current record on a page
 *
 * @restriction supported in client and user event scripts only
 *
 * @param {string} type sublist name
 * @return {int}
 * @since 2005.0
 */
function nlapiGetLineItemCount(type) {
}

/**
 * Return the value of a sublist field on the current record on a page
 * @restriction supported in client and user event scripts only
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {int} linenum line number (1-based)
 * @param {string} [timezone] value
 * @return {string}
 * @since 2013.2
 */
function nlapiGetLineItemDateTimeValue(type, fieldName, linenum, timezone) {
}

/**
 * Return field definition for a sublist field
 *
 * @param {string} type    sublist name
 * @param {string} fieldName sublist field name
 * @param {int} [linenum] line number for sublist field (1-based) and only valid for sublists of type staticlist and list
 *
 * @return {nlobjField}
 * @since 2009.1
 */
function nlapiGetLineItemField(type, fieldName, linenum) {
}

/**
 * Return an nlobjField containing sublist field metadata
 *
 * @param {string} type    matrix sublist name
 * @param {string} fieldName matrix field name
 * @param {int} linenum line number (1-based)
 * @param {int} column matrix column index (1-based)
 *
 * @return {nlobjField}
 * @since 2009.2
 */
function nlapiGetLineItemMatrixField(type, fieldName, linenum, column) {
}

/**
 * Return the value of a sublist matrix field on the current record on a page
 * @restriction supported in client and user event scripts only
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {int} linenum line number (1-based)
 * @param {int} column column index (1-based)
 *
 * @return {string} value
 * @since 2009.2
 */
function nlapiGetLineItemMatrixValue(type, fieldName, linenum, column) {
}

/**
 * Return the label of a select field's current selection for a particular line
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {int} linenum line number (1-based)
 * @return {string}
 * @since 2005.0
 */
function nlapiGetLineItemText(type, fieldName, linenum) {
}

/**
 * Return the value of a sublist field on the current record on a page
 * @restriction supported in client and user event scripts only
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {int} linenum line number (1-based)
 * @return {string}
 * @since 2005.0
 */
function nlapiGetLineItemValue(type, fieldName, linenum) {
}

/**
 * Returns the values of a multiselect sublist field on a selected line. One example of a multiselect
 * Sublist field is the Serial Numbers field on the Items sublist
 * @restriction supported in client scripts only
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {int} linenum line number (1-based)
 * @return {string[]} An array of string values for the multiselect sublist field
 * @since 2012.1
 */
function nlapiGetLineItemValues(type, fieldName, linenum) {
}

/**
 * Return sublist field mandatoriness
 *
 * @restriction Only supported on sublists of type inlineeditor or editor (current field only)
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 *
 * @return {boolean}
 * @since 2009.1
 */
function nlapiGetLineItemMandatory(type, fieldName) {
}

/**
 * Return the number of columns for a matrix field
 *
 * @param {string} type sublist name
 * @param {string} fieldName matrix field name
 * @return {int}
 * @since 2009.2
 */
function nlapiGetMatrixCount(type, fieldName) {
}

/**
 * Return field definition for a matrix field
 *
 * @param {string} type    matrix sublist name
 * @param {string} fieldName matrix field name
 * @param {int} column matrix field column index (1-based)
 *
 * @return {nlobjField}
 * @since 2009.2
 */
function nlapiGetMatrixField(type, fieldName, column) {
}

/**
 * Get the value of a matrix header field
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {int} column matrix column index (1-based)
 *
 * @return {string}
 * @since 2009.2
 */
function nlapiGetMatrixValue(type, fieldName, column) {
}

/**
 * Insert and select a new line into the sublist on a page or userevent
 * Available to client and user event scripts only
 *
 * @param {string} type sublist name
 * @param {int} [line] line number at which to insert a new line
 * @return{void}
 * @since 2005.0
 */
function nlapiInsertLineItem(type, line) {
}

/**
 * Adds a select option to a scripted select or multiselect sublist field
 *
 * @restriction Client SuiteScript only
 *
 * @param {string} type    sublist name
 * @param {string} fieldName sublist field name
 * @param {string} value internal ID for select option
 * @param {string} text display text for select option
 * @param {boolean} [selected] if true then option will be selected by default
 *
 * @return {void}
 * @since 2008.2
 */
function nlapiInsertLineItemOption(type, fieldName, value, text, selected) {
}

/**
 * Returns true if any changes have been made to a sublist
 *
 * @restriction Client SuiteScript only
 *
 * @param {string} type sublist name
 *
 * @return {boolean}
 * @since 2005.0
 */
function nlapiIsLineItemChanged(type) {
}

/**
 * Refresh the sublist table
 *
 * @restriction Only supported for sublists of type inlineeditor, editor, and staticlist
 * @restriction Client SuiteScript only
 *
 * @param {string} type sublist name
 * @return{void}
 * @since 2005.0
 */
function nlapiRefreshLineItems(type) {
}

/**
 * Remove the currently selected line from the sublist on a page or userevent
 *
 * @param {string} type sublist name
 * @param {int} [line]    line number to remove
 * @return {void}
 * @since 2005.0
 */
function nlapiRemoveLineItem(type, line) {
}

/**
 * Removes a select option (or all if value is null) from a scripted select or multiselect sublist field
 *
 * @restriction Client SuiteScript only
 *
 * @param {string} type    sublist name
 * @param {string} fieldName sublist field name
 * @param {string} value internal ID for select option to remove
 *
 * @return {void}
 * @since 2008.2
 */
function nlapiRemoveLineItemOption(type, fieldName, value) {
}

/**
 * Select an existing line in a sublist
 *
 * @param {string} type sublist name
 * @param {int} linenum line number to select
 * @return {void}
 * @since 2005.0
 */
function nlapiSelectLineItem(type, linenum) {
}

/**
 * Select a new line in a sublist
 *
 * @restriction Only supported for sublists of type inlineeditor and editor
 *
 * @param {string} type sublist name
 * @return {void}
 * @since 2005.0
 */
function nlapiSelectNewLineItem(type) {
}

/**
 * Set the value of a field on the currently selected line
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {string} value field value
 * @param {string} [timezone] value
 * @return {void}
 * @since 2013.2
 */
function nlapiSetCurrentLineItemDateTimeValue(type, fieldName, value, timezone) {
}

/**
 * Set the current value of a sublist field on the current record on a page
 *
 * @restriction supported in client and user event scripts only
 * @restriction synchronous arg is only supported in Client SuiteScript
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {int} column matrix column index (1-based)
 * @param {string} value matrix field value
 * @param {boolean} [fireFieldChanged=true] if false then the field change event is suppressed
 * @param {boolean} [synchronous=false] if true then sourcing and field change execution happens synchronously
 *
 * @return {void}
 * @since 2009.2
 */
function nlapiSetCurrentLineItemMatrixValue(type, fieldName, column, value, fireFieldChanged, synchronous) {
}

/**
 * Set the value of a field on the currently selected line using it's label
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {string} txt string containing display value or search text
 * @param {boolean} [fireFieldChanged=true]    if false then the field change event is suppressed
 * @param {boolean} [synchronous=false] if true then sourcing and field change execution happens synchronously
 * @return {void}
 * @since 2005.0
 */
function nlapiSetCurrentLineItemText(type, fieldName, txt, fireFieldChanged, synchronous) {
}

/**
 * Set the value of a field on the currently selected line
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {string} value field value
 * @param {boolean} [fireFieldChanged=true] If false then the field change event is suppressed
 * @param {boolean} [synchronous=false] if true then sourcing and field change execution happens synchronously
 *
 * @return {void}
 * @since 2005.0
 */
function nlapiSetCurrentLineItemValue(type, fieldName, value, fireFieldChanged, synchronous) {
}

/**
 * Sets the values for a multi-select sublist field.
 *
 * Note that like any other “set field” APIs, the values you use will be internal ID values.
 * For example, rather than specifying 'Abe Simpson' as a customer value, you will use 232 or 88 or whatever
 * the internal ID is for customer Abe Simpson.
 *
 * However, if you are using this API to set the serialnumber field on the Item sublist,
 * you will set the text string of the actual serial number, for example 'serialnum1', 'serialnum2', and so on.
 *
 * This API is supported in client scripts only.
 *
 * @param {string} type The sublist internal ID (for example, use addressbook as the ID for the Address sublist)
 * @param {string} fieldName The name of the multi-select sublist field being set
 * @param {string[]} values The values for the field
 * @param {boolean} [fireFieldChanged=true] If false then the field change event is suppressed
 * @param {boolean} [synchronous=false] if true then sourcing and field change execution happens synchronously
 *
 * @return {void}
 * @since 2012.1
 */
function nlapiSetCurrentLineItemValues(type, fieldName, values, fireFieldChanged, synchronous) {
}

/**
 * Set the value of a sublist field on the current record on a page
 * @restriction supported in client and user event scripts only
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {int} linenum line number (1-based)
 * @param {string} value datetime value
 * @param {string} [timezone] value
 * @return {void}
 * @since 2013.2
 */
function nlapiSetLineItemDateTimeValue(type, fieldName, linenum, value, timezone) {
}

/**
 * Disable a sublist field
 *
 * @restriction Only supported on sublists of type inlineeditor, editor and list (current field only)
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {boolean} disable if true then field is disabled
 * @param {int} linenum line number for sublist field (1-based) and only valid for sublists of type list
 *
 * @return {void}
 * @since 2009.1
 */
function nlapiSetLineItemDisabled(type, fieldName, disable, linenum) {
}

/**
 * Make a sublist field mandatory
 *
 * @restriction Only supported on sublists of type inlineeditor or editor (current field only)
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {boolean} mandatory if true then field is made mandatory
 * @return {void}
 * @since 2009.2
 */
function nlapiSetLineItemMandatory(type, fieldName, mandatory) {
}

/**
 * Set the value of a sublist field on the current record on a page
 * @restriction supported in client and user event scripts only
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {int} linenum line number (1-based)
 * @param {string} value
 * @return {void}
 * @since 2005.0
 */
function nlapiSetLineItemValue(type, fieldName, linenum, value) {
}

/**
 * Set the value of a matrix header field
 *
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string} type sublist name
 * @param {string} fieldName sublist field name
 * @param {int} column matrix column index (1-based)
 * @param {string} value field value for matrix field
 * @param {boolean} [fireFieldChanged=true]    if false then the field change event is suppressed
 * @param {boolean} [synchronous=false] if true then sourcing and field change execution happens synchronously
 *
 * @return {void}
 * @since 2009.2
 */
function nlapiSetMatrixValue(type, fieldName, column, value, fireFieldChanged, synchronous) {
}

/**
 * Primary object used to encapsulate a NetSuite sublist.
 *
 * This object is read-only except for instances created via the UI Object API using Suitelets
 *  or beforeLoad user event scripts.
 * To add a sublist, you must first create a custom form using nlapiCreateForm(title, hideNavbar),
 *  which returns an nlobjForm object.
 * Once the form object is instantiated, you can add a new sublist to the form using the
 *  nlobjForm.addSubList(name, type, label, tab) method, which returns a reference to nlobSublist.
 *
 * @constructor
 */
function nlobjSubList() {
}

/**
 * Set the label for this sublist
 * This method is only supported on sublists via the UI Object API
 *
 * @param {string} label
 * @since 2008.2
 */
nlobjSubList.prototype.setLabel = function(label) {
};

/**
 * Set helper text for this sublist
 * This method is only supported on sublists via the UI Object API
 *
 * @param {string} help
 * @since 2008.2
 */
nlobjSubList.prototype.setHelpText = function(help) {
};

/**
 *
 * @param field
 */
nlobjSubList.prototype.setAmountField = function(field) {
};

/**
 * Set the display type for this sublist: hidden|normal
 * This method is only supported on scripted or staticlist sublists via the UI Object API
 *
 * @param {string} type
 * @since 2008.2
 */
nlobjSubList.prototype.setDisplayType = function(type) {
};

/**
 * Set the value of a cell in this sublist
 *
 * @param {string} field sublist field name
 * @param {int} line  line number (1-based)
 * @param {string} value sublist value
 * @since 2008.2
 */
nlobjSubList.prototype.setLineItemValue = function(field, line, value) {
};

/**
 * Set the value of a matrix cell in this sublist
 * @param {string} field    matrix field name
 * @param {int} line    line number (1-based)
 * @param {int} column  matrix column index (1-based)
 * @param {string} value   matrix field value
 * @return {void}
 * @since 2009.2
 */
nlobjSubList.prototype.setLineItemMatrixValue = function(field, line, column, value) {
};

/**
 * Set values for multiple lines (Array of nlobjSearchResults or name-value pair Arrays) in this sublist
 * Note that this method is only supported on scripted sublists via the UI Object API
 *
 * @param {string[][], nlobjSearchResult[]} values
 * @since 2008.2
 */
nlobjSubList.prototype.setLineItemValues = function(values) {
};

/**
 * Return the number of lines in a sublist
 *
 * @param {string} group sublist name
 *
 * @since 2010.1
 */
nlobjSubList.prototype.getLineItemCount = function(group) {
};

/**
 * @since 2010.1
 */
nlobjSubList.prototype.getLineItemValue = function() {
};

/**
 * Add a field (column) to this sublist
 *
 * @param {string} name field name
 * @param {string} type field type
 * @param {string} label field label
 * @param {string, int} [source] script ID or internal ID for source list used for this select field
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjSubList.prototype.addField = function(name, type, label, source) {
};

/**
 * designate a field on sublist that must be unique across all lines (only supported on sublists of type inlineeditor, editor)
 * @param {string} fieldName the name of a field on this sublist whose value must be unique across all lines
 * @return {nlobjField}
 * @since 2009.2
 */
nlobjSubList.prototype.setUniqueField = function(fieldName) {
};

/**
 * Add a button to this sublist
 *
 * @param {string} name button name
 * @param {string} label button label
 * @param {string} script button script (function name)
 * @return {nlobjButton}
 * @since 2008.2
 */
nlobjSubList.prototype.addButton = function(name, label, script) {
};

/**
 * Add "Refresh" button to sublists of type "staticlist" to support manual refreshing of the sublist (without entire page reloads) if it's contents are very volatile
 * @return {nlobjButton}
 * @since 2009.2
 */
nlobjSubList.prototype.addRefreshButton = function() {
};

/**
 * Add "Mark All" and "Un-mark All" buttons to this sublist of type "list"
 * @since 2008.2
 */
nlobjSubList.prototype.addMarkAllButtons = function() {
};
