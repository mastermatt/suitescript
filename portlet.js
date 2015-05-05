/**
 * SuiteScript Portlet APIs
 */


/**
 * Causes a FORM type nlobjPortlet to immediately reload.
 * This API is available within a client SuiteScript associated with a custom FORM portlet,
 * or from JavaScript event handlers attached to portlet elements.
 *
 * This API cannot be called directly from within a FORM portlet script.
 *
 * @return {void}
 * @since 2011.1
 */
function nlapiRefreshPortlet() {
}

/**
 * Causes a FORM type nlobjPortlet to be resized.
 *
 * This API can be used to ensure that a custom form portlet’s embedded iframe resizes when the size
 * of its contents change. This type of iframe does not resize automatically as its contents change,
 * so when a form portlet’s contents shrink they are surrounded by white space, and when contents grow
 * they are cut off. A call to this API prevents these display issues.
 *
 * This API is available within a client SuiteScript associated with a custom FORM portlet,
 * or from JavaScript event handlers attached to portlet elements. This API cannot be called directly
 * from within a FORM portlet script.
 *
 * @return {void}
 * @since 2011.1
 */
function nlapiResizePortlet() {
}
