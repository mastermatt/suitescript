/**
 * SuiteScript SuiteFlow APIs
 *
 * Use these APIs to interact with the NetSuite SuiteFlow Manager
 */


/**
 * Initiates a workflow on-demand and returns the workflow instance ID for the workflow-record combination
 *
 * This API is supported in user event, scheduled, portlet, Suitelet, mass update, and workflow action scripts.
 *
 * @governance 20 units
 *
 * @param {string} recordtype record type ID of the workflow base record
 * @param {int} id internal ID of the base record
 * @param {string, int} workflowid internal ID or script ID for the workflow definition
 *
 * @return {int} The internal ID of the workflow instance used to track the workflow against the record
 * @since 2010.1
 */
function nlapiInitiateWorkflow(recordtype, id, workflowid) {
}

/**
 * Triggers a workflow on a record
 *
 * The actions and transitions of the workflow will be evaluated for the record based on the current state that it is in.
 * This API is supported in user event, scheduled, portlet, Suitelet, mass update, and workflow action scripts.
 *
 * @governance 20 units
 *
 * @param {string} recordType record type ID of the workflow base record
 * @param {int} id internal ID of the base record
 * @param {string, int} workflowid internal ID or script ID for the workflow definition
 * @param {string, int} [actionid] internal ID or script ID of the action script
 *
 * @return {int} The internal ID of the workflow instance used to track the workflow against the record
 * @since 2010.1
 */
function nlapiTriggerWorkflow(recordType, id, workflowid, actionid) {
}
