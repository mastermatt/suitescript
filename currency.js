/**
 * SuiteScript Currency APIs
 *
 * Use these APIs to work with currency, as it pertains to your NetSuite account
 */


/**
 * Calculate exchange rate between two currencies as of today or an optional effective date
 *
 * This API is supported in client, user event, scheduled, portlet, and Suitelet scripts
 *
 * @governance 10 units
 *
 * @param {string, int} fromCurrency internal ID or currency code of currency we are converting from
 * @param {string, int} toCurrency internal ID or currency code of currency we are converting to
 * @param {string} [date] string containing date of effective exchange rate. defaults to today
 *
 * @return {number} The exchange rate (as a float) in the same precision that is displayed in the NetSuite UI.
 *                  Note that null is returned if the targetCurrency is not set to a base currency.
 * @exception {SSS_INVALID_CURRENCY_ID} If an invalid currency (from or to) is specified
 * @since 2009.1
 */
function nlapiExchangeRate(fromCurrency, toCurrency, date) {
}

/**
 * Format a number for data entry into a currency field
 *
 * @param {string} string numeric string used to format for display as currency using user's locale
 *
 * @return {string}
 * @since 2008.1
 */
function nlapiFormatCurrency(string) {
}
