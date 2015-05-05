/**
 * SuiteScript User Credentials APIs
 *
 * Use these APIs to change the NetSuite login credentials of the currently logged-in user.
 * In NetSuite, a user’s login credentials consists of a user’s email address and a password.
 *
 * Important: When building a custom UI outside of the standard NetSuite UI (such as building
 *  a custom mobile page using Suitelet or building E-Commerce pages using SSP),
 *  use these APIs to help users manage their credentials within the custom UI.
 */


/**
 * Returns the NetSuite login credentials of currently logged-in user.
 * This API is supported in user event, portlet, Suitelet, RESTlet, and SSP scripts.
 *
 * @return {nlobjLogin}
 * @since 2012.2
 */
function nlapiGetLogin() {
}

/**
 * Primary object used to encapsulate NetSuite user login credentials.
 *
 * @constructor
 */
function nlobjLogin() {
}

/**
 * Sets the logged-in user’s email address to a new one.
 *
 * @param {string} currentPassword current Password
 * @param {string} newEmail new Email
 * @param {boolean} [justThisAccount=true] Indicates whether to apply email change only to roles within this account
 *                      or apply email change to its all NetSuite accounts and roles
 *
 * @return {void}
 * @since 2012.2
 */

nlobjLogin.prototype.changeEmail = function(currentPassword, newEmail, justThisAccount) {
};

/**
 * @param {string} currentPassword current Password
 * @param {string} newPassword The new password for the logged-in user.
 *                      If a valid value is not specified, an error will be thrown.
 *
 * @return {void}
 * @since 2012.2
 */
nlobjLogin.prototype.changePassword = function(currentPassword, newPassword) {
};
