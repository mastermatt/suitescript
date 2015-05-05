/**
 * SuiteScript Date APIs
 *
 * Use these APIs to manipulate standard JavaScript Date and String objects
 */


/**
 * Convert a String into a Date object
 *
 * @param {string} str date string in the user's date format, timeofday format, or datetime format
 * @param {string} [format='date'] format type to use: date|datetime|timeofday
 *
 * @return {Date}
 * @since 2005.0
 */
function nlapiStringToDate(str, format) {
}

/**
 * Convert a Date object into a formatted String
 *
 * @param {Date} date date object being converted to a string
 * @param {string} [format='date'] format type to use: date|datetime|timeofday
 *
 * @return {string}
 * @since 2005.0
 */
function nlapiDateToString(date, format) {
}

/**
 * Add/subtract days to a Date object and returns a new Date
 *
 * @param {Date} date date object used to calculate the new date
 * @param {int} days the number of days to add to this date object
 *
 * @return {Date}
 * @since 2008.1
 */
function nlapiAddDays(date, days) {
}

/**
 * Add/subtract months to a Date object and returns a new Date
 *
 * @param {Date} date date object used to calculate the new date
 * @param {int} months the number of months to add to this date object
 *
 * @return {Date}
 * @since 2008.1
 */
function nlapiAddMonths(date, months) {
}
