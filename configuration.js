/**
 * SuiteScript Configuration APIs
 *
 * NetSuite allows developers to programmatically obtain, and in some cases, change the values
 *  on certain account configuration pages.
 */


/**
 * Loads a configuration record
 *
 * The following configuration pages support SuiteScript:
 *      Company Information, General Preferences, Accounting Preferences, Accounting Periods, Tax Periods.
 * Once a page is loaded, you can set configuration values using nlobjConfiguration.setFieldValue(name, value).
 * Available in scheduled and Suitelet scripts only.
 *
 * @governance 10 units
 *
 * @param {string} type The internal ID of the configuration page. Available IDs are:
 *                  • userpreferences - Home > Set Preferences.
 *                  • companyinformation - Setup > Company > Company Information
 *                  • companypreferences - Setup > Company > General Preferences
 *                  • accountingpreferences - Setup > Accounting > Accounting Preferences
 *                  • accountingperiods - Setup > Accounting > Manage Accounting Periods
 *                  • taxperiods - Setup > Accounting > Manage Tax Periods
 *                  • companyfeatures - The internal ID for looking up which features are enabled in an account.
 *
 * @return {nlobjConfiguration}
 * @since 2009.2
 */
function nlapiLoadConfiguration(type) {
}

/**
 * Commits all changes to a configuration record
 *
 * Available in scheduled and Suitelet scripts only
 *
 * @governance 20 units
 *
 * @param {nlobjConfiguration} config
 *
 * @return (void)
 * @since 2009.2
 */
function nlapiSubmitConfiguration(config) {
}

/**
 * Class definition for interacting with setup/configuration pages
 *
 * @constructor
 * @since 2009.2
 */
function nlobjConfiguration() {
}

/**
 * Return the type corresponding to this setup record
 *
 * @return {string}
 * @since 2009.2
 */
nlobjConfiguration.prototype.getType = function() {
};

/**
 * Return field metadata for field
 *
 * @param {string} fieldName field name
 *
 * @return {nlobjField|null}
 * @since 2009.2
 */
nlobjConfiguration.prototype.getField = function(fieldName) {
};

/**
 * Set the value of a field
 *
 * @param {string} name field name
 * @param {string} value field value
 *
 * @return {void}
 * @since 2009.2
 */
nlobjConfiguration.prototype.setFieldValue = function(name, value) {
};

/**
 * Set the values of a multi-select field
 * @restriction only supported for multi-select fields
 *
 * @param {string} name field name
 * @param {string[]} value field values
 *
 * @return {void}
 * @since 2009.2
 */
nlobjConfiguration.prototype.setFieldValues = function(name, value) {
};

/**
 * Return the value of a field
 *
 * @param {string} name field name
 *
 * @return {string}
 * @since 2009.2
 */
nlobjConfiguration.prototype.getFieldValue = function(name) {
};

/**
 * Return the selected values of a multi-select field as an Array
 * @restriction only supported for multi-select fields
 *
 * @param {string} name field name
 *
 * @return {string[]}
 * @since 2009.2
 */
nlobjConfiguration.prototype.getFieldValues = function(name) {
};

/**
 * Set the value (via display value) of a field
 * @restriction only supported for select fields
 *
 * @param {string} name field name
 * @param {string} text field display text
 *
 * @return {void}
 * @since 2009.2
 */
nlobjConfiguration.prototype.setFieldText = function(name, text) {
};

/**
 * Set the values (via display values) of a multi-select field
 * @restriction only supported for multi-select fields
 *
 * @param {string} name field name
 * @param {string[]} texts array of field display text values
 *
 * @return {void}
 * @since 2009.2
 */
nlobjConfiguration.prototype.setFieldTexts = function(name, texts) {
};

/**
 * Return the text value of a field
 * @restriction only supported for select fields
 *
 * @param {string} name field name
 * @return {string}
 *
 * @since 2009.2
 */
nlobjConfiguration.prototype.getFieldText = function(name) {
};

/**
 * Return the selected text values of a multi-select field as an Array
 *
 * @param {string} name field name
 *
 * @return {string[]}
 * @since 2009.2
 */
nlobjConfiguration.prototype.getFieldTexts = function(name) {
};

/**
 * Return an Array of all field names on the record
 *
 * @return {string[]}
 * @since 2009.2
 */
nlobjConfiguration.prototype.getAllFields = function() {
};
