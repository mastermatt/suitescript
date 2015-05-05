/**
 * SuiteScript Field APIs
 *
 * The SuiteScript API includes several Field APIs you can use to set and get values for built-in NetSuite standard
 *  fields, as well as for custom fields.
 *
 * Standard fields are those that come with NetSuite.
 *
 * Custom fields are those that have been created by NetSuite users to customize their accounts.
 * Custom fields are created using SuiteBuilder point-and-click customization tools.
 */

/**
 * Sets the given field to disabled or enabled based on the value (true or false)
 *
 * This API is supported in client scripts only.
 *
 * @param {string} fieldName The internal ID name of the field to enable/disable
 * @param {boolean} value  If set to true the field is disabled. If set to false it is enabled
 *
 * @return {void}
 */
function nlapiDisableField(fieldName, value) {
}

/**
 * Return field definition for a field
 *
 * @param {string} fieldName the name of the field
 *
 * @return {nlobjField}
 * @since 2009.1
 */
function nlapiGetField(fieldName) {
}

/**
 * Return field mandatoriness
 *
 * @param {string} fieldName field name
 *
 * @return {boolean}
 * @since 2009.1
 */
function nlapiGetFieldMandatory(fieldName) {
}

/**
 * Return the display value of a select field's current selection on the current record on a page
 *
 * @restriction supported in client and user event scripts only
 *
 * @param {string} fieldName the field name
 *
 * @return {string}
 * @since 2005.0
 */
function nlapiGetFieldText(fieldName) {
}

/**
 * Return the values (via display text) of a multiselect field on the current record
 *
 * @restriction supported in client and user event scripts only
 *
 * @param {string} fieldName field name
 *
 * @return {string[]}
 * @since 2009.1
 */
function nlapiGetFieldTexts(fieldName) {
}

/**
 * Return the value of a field on the current record on a page
 *
 * @restriction supported in client and user event scripts only
 *
 * @param {string} fieldName the field name
 *
 * @return {string}
 * @since 2005.0
 */
function nlapiGetFieldValue(fieldName) {
}

/**
 * Return the values of a multiselect field on the current record on a page
 *
 * @restriction supported in client and user event scripts only
 *
 * @param {string} fieldName the field name
 *
 * @return {string[]}
 * @since 2005.0
 */
function nlapiGetFieldValues(fieldName) {
}

/**
 * Adds a select option to a scripted select or multiselect field
 *
 * @restriction Client SuiteScript only
 *
 * @param {string} fieldName field name
 * @param {string} value internal ID for select option
 * @param {string} text display text for select option
 * @param {boolean} [selected] if true then option will be selected by default
 *
 * @return {void}
 * @since 2008.2
 */
function nlapiInsertSelectOption(fieldName, value, text, selected) {
}

/**
 * Performs a search for one or more body fields on a record
 *
 * This function supports joined-field lookups. Note that the notation for joined fields is: join_id.field_name
 *
 * Note: Long text fields are truncated at 4000 characters in search/lookup operations
 * This API is available in client, user event, scheduled, portlet, and Suitelet scripts.
 *
 * @governance 10 units for transactions, 2 for custom records, 5 for all other records
 *
 * @param {string} type  The record internal ID name
 * @param {int} id The internalId for the record, for example 777 or 87
 * @param {string|string[]} fields  Sets an array of column/field names to look up, or a single column/field name.
 *              The fields parameter can also be set to reference joined fields
 * @param {boolean} [text=false]  If false the internal ID of the drop-down field is returned.
 *              If set to true, this argument returns the UI display name for this field or fields
 *              (valid only for SELECT|IMAGE|DOCUMENT fields)
 *
 * @return {string|Object} A single value (or text) or an associative Array of field name -> value (or text) pairs
 *              depending on the field’s argument.
 */
function nlapiLookupField(type, id, fields, text) {
}

/**
 * Removes a select option (or all if value is null) from a scripted select or multiselect field
 *
 * @restriction Client SuiteScript only
 *
 * @param {string} fieldName field name
 * @param {string} value internal ID of select option to remove
 *
 * @return {void}
 * @since 2008.2
 */
function nlapiRemoveSelectOption(fieldName, value) {
}

/**
 * Make a field mandatory
 *
 * @param {string} fieldName field name
 * @param {boolean} mandatory if true then field is made mandatory
 *
 * @return {void}
 * @since 2009.1
 */
function nlapiSetFieldMandatory(fieldName, mandatory) {
}

/**
 * Set the value of a field on the current record on a page using it's label
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string} fieldName the field name
 * @param {string} txt display name used to lookup field value
 * @param {boolean} [fireFieldChanged=true]    if false then the field change event is suppressed
 * @param {boolean} [synchronous=false] if true then sourcing and field change execution happens synchronously
 *
 * @return {void}
 * @since 2005.0
 */
function nlapiSetFieldText(fieldName, txt, fireFieldChanged, synchronous) {
}

/**
 * Set the values (via display text) of a multiselect field on the current record on a page
 *
 * @restriction supported in client and user event scripts only
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string} fieldName field name
 * @param {string[]} texts array of strings containing display values for field
 * @param {boolean} [fireFieldChanged=true]    if false then the field change event is suppressed
 * @param {boolean} [synchronous=false] if true then sourcing and field change execution happens synchronously
 *
 * @return {void}
 * @since 2009.1
 */
function nlapiSetFieldTexts(fieldName, texts, fireFieldChanged, synchronous) {
}

/**
 * Set the value of a field on the current record on a page
 * @restriction supported in client and user event scripts only
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string} fieldName the field name
 * @param {string} value value used to set field
 * @param {boolean} [fireFieldChanged=true] if false then the field change event is suppressed
 * @param {boolean} [synchronous=false] if true then sourcing and field change execution happens synchronously
 *
 * @return {void}
 * @since 2005.0
 */
function nlapiSetFieldValue(fieldName, value, fireFieldChanged, synchronous) {
}

/**
 * Set the values of a multiselect field on the current record on a page
 *
 * @restriction supported in client and user event scripts only
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string} fieldName field name
 * @param {string[]} values array of strings containing values for field
 * @param {boolean} [fireFieldChanged=true] if false then the field change event is suppressed
 * @param {boolean} [synchronous=false] if true then sourcing and field change execution happens synchronously
 *
 * @return {void}
 * @since 2005.0
 */
function nlapiSetFieldValues(fieldName, values, fireFieldChanged, synchronous) {
}

/**
 * Submit the values of a field or set of fields for an existing record
 *
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
 *
 * @param {string} type The record type name
 * @param {int} id The internal ID for the record
 * @param {string, string[]} fields field or fields being updated
 * @param {string, string[]} values field value or field values used for updating
 * @param {boolean} [doSourcing=false] If not set, this argument defaults to false and field sourcing does not occur
 * @return {void}
 * @since 2008.1
 */
function nlapiSubmitField(type, id, fields, values, doSourcing) {
}

/**
 * Core descriptor for fields used to define records and also used to build pages and portlets
 *
 * This object is READ-ONLY except for scripted fields created via the UI Object API using Suitelets
 *  or beforeLoad user events
 *
 * Important Things to Note about nlobjField:
 *  • To add a nlobjField object to an existing NetSuite form (that appears on a record),
 *      use a beforeLoad user event script.
 *
 *  • To add a nlobjField object to a Suitelet, you must create a custom form using nlapiCreateForm(title, hideNavbar),
 *      which returns an nlobjForm object. Once the form object is instantiated, add a new field to the form using
 *      the nlobjForm.addField(name, type, label, sourceOrRadio, tab) method, which returns a reference to nlobjField.
 *
 *  • To return a reference to an nlobjField object, use nlapiGetField(fieldName) (for body fields) or
 *      nlapiGetLineItemField(type, fieldName, linenum) (for sublist fields). If you do not know the difference
 *      between a body field and a sublist field, see Working with Fields Overview in the NetSuite Help Center.
 *
 *  • If you use nlapiGetField(fieldName) in a client script to return a nlobjField object, the object returned
 *      is read-only. This means that you can use nlobjField getter methods on the object, however, you cannot
 *      use nlobjField setter methods to set field properties.
 *
 *  • Be aware of any special permissions that might be applied to a field. For example, a permission error will
 *      be thrown if you attempt to get select options on a field that has been disabled on a form.
 *
 * @constructor
 */
function nlobjField() {
}

/**
 * Return field name
 * @return {string}
 * @since 2009.2
 */
nlobjField.prototype.getName = function() {
};

/**
 * Return field label
 * @return {string}
 * @since 2009.2
 */
nlobjField.prototype.getLabel = function() {
};

/**
 * Return field type
 *  @return {string}
 * @since 2009.2
 */
nlobjField.prototype.getType = function() {
};

/**
 * Return true if field is hidden
 * @return {boolean}
 * @since 2009.2
 */
nlobjField.prototype.isHidden = function() {
};

/**
 * Return true if field is mandatory
 * @return {boolean}
 * @since 2009.2
 */
nlobjField.prototype.isMandatory = function() {
};

/**
 * Return true if field is disabled
 * @return {boolean}
 * @since 2009.2
 */
nlobjField.prototype.isDisabled = function() {
};

/**
 * Set the label for this field
 * This method is only supported on scripted fields via the UI Object API
 *
 * @param {string} label
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjField.prototype.setLabel = function(label) {
};

/**
 * Set the alias used to set the value for this field. Defaults to field name
 * This method is only supported on scripted fields via the UI Object API
 *
 * @param {string} alias column used to populate the field (mostly relevant when populating sublist fields)
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjField.prototype.setAlias = function(alias) {
};

/**
 * Set the default value for this field
 * This method is only supported on scripted fields via the UI Object API
 *
 * @param {string} value
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjField.prototype.setDefaultValue = function(value) {
};

/**
 * Disable field via field metadata
 * This method is only supported on scripted fields via the UI Object API
 * @param {boolean} disabled if true then field should be disabled
 * @return {nlobjField}
 * @since 2009.2
 */
nlobjField.prototype.setDisabled = function(disabled) {
};

/**
 * Make this field mandatory
 * This method is only supported on scripted fields via the UI Object API
 *
 * @param {boolean} mandatory if true then field becomes mandatory
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjField.prototype.setMandatory = function(mandatory) {
};

/**
 * Set the max-length for this field (only valid for certain field types)
 *  This method is only supported on scripted fields via the UI Object API
 *
 * @param {int} maxLength maximum length for this field
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjField.prototype.setMaxLength = function(maxLength) {
};

/**
 * Set the display type for this field
 *
 * @param {string} type • hidden – Hides the field on the form.
 *                      • inline – Not supported in client side scripts.
 *                      • readonly – Disables the field. The field is still selectable and
 *                                  scrollable. Supported with textarea fields and rich text fields.
 *                      • entry – Makes a sublist field appear as a data entry input field.
 *                                  Supported with non-checkbox select fields.
 *                      • disabled - Disables the field from the users' changes.
 *                      • normal - Makes the field appear as normal input field.
 *                                  Supported with non-sublist fields.
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjField.prototype.setDisplayType = function(type) {
};

/**
 * Set the break type (startcol|startrow|none) for this field.
 *  startrow is only used for fields with a layout typeof outside
 * This method is only supported on scripted fields via the UI Object API
 *
 * @param {string} breaktype break type used to add a break in flow layout for this field: startcol|startrow|none
 * @return {nlobjField}
 * @since 2009.2
 */
nlobjField.prototype.setBreakType = function(breaktype) {
};

/**
 * Set the layout type and optionally the break type
 * This method is only supported on scripted fields via the UI Object API
 *
 * @param {string} type layout type: outside|startrow|midrow|endrow|normal
 * @param {string} [breakType] break type: startcol|startrow|none
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjField.prototype.setLayoutType = function(type, breakType) {
};

/**
 * Set the text that gets displayed in lieu of the field value for URL fields
 *
 * @param {string} text user-friendly display value in lieu of URL
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjField.prototype.setLinkText = function(text) {
};

/**
 * Set the width and height for this field
 * This method is only supported on scripted fields via the UI Object API
 *
 * @param {int} width
 * @param {int} height
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjField.prototype.setDisplaySize = function(width, height) {
};

/**
 * Set the amount of empty vertical space (rows) between this field and the previous field
 * This method is only supported on scripted fields via the UI Object API
 *
 * @param {int} padding # of empty rows to display above field
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjField.prototype.setPadding = function(padding) {
};

/**
 * Set help text for this field. If inline is set on assistant pages, help is displayed inline below field
 * This method is only supported on scripted fields via the UI Object API
 *
 * @param {string} help    field level help content (rich text) for field
 * @param {string} [inline] if true then in addition to the popup field help, the help will also be displayed
 *          inline below field (supported on assistant pages only)
 * @return {nlobjField}
 * @since 2009.2
 */
nlobjField.prototype.setHelpText = function(help, inline) {
};

/**
 * Add a select option to this field (valid for select/multiselect fields)
 * This method is only supported on scripted fields via the UI Object API
 *
 * @param {string} value internal ID for this select option
 * @param {string} text display value for this select option
 * @param {boolean} [selected] if true then this select option will be selected by default
 * @since 2008.2
 */
nlobjField.prototype.addSelectOption = function(value, text, selected) {
};

/**
 * Use this API to obtain a list of available options on a select field
 *
 * This API can be used on both standard and custom select fields. Only the first 1,000 available
 *  options will be returned by this API.
 * This method can only be used in server contexts against a record object. Also note that a call to this
 *  method may return different results for the same field for different roles.
 * If you attempt to get select options on a field that is not a select field, or if you reference a field
 *  that does not exist on the form, null is returned.
 *
 * @param {string} [filter] A search string to filter the select options that are returned.
 *                      For example, if there are 50 select options available, and 10 of the options
 *                      contains 'John', e.g. “John Smith” or “Shauna Johnson”, only those 10 options will be returned.
 *
 *                      Note: Filter values are case insensitive.
 *                      The filters 'John' and 'john' will return the same select options.
 * @param {string} [filterOperator='contains'] Supported operators are contains | is | startswith.
 *          If not specified, defaults to the contains operator.
 *
 * @return {nlobjSelectOption}
 * @since 2009.2
 */
nlobjField.prototype.getSelectOptions = function(filter, filterOperator) {
};

/**
 * Select|radio option used for building select fields via the UI Object API and for describing select|radio fields
 *
 * @constructor
 * @since 2009.2
 */
function nlobjSelectOption() {
}

/**
 * Return internal ID for select option
 *
 * @return {string}
 * @since 2009.2
 */
nlobjSelectOption.prototype.getId = function() {
};

/**
 * Return display value for select option
 *
 * @return {string}
 * @since 2009.2
 */
nlobjSelectOption.prototype.getText = function() {
};
