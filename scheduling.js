/**
 * SuiteScript Scheduling APIs
 *
 * The scheduling APIs are used to start, gather information about, and pause, scripts until a more appropriate time.
 */


/**
 * Creates a job to initiate an instance of the specified workflow.
 *
 * This job is then placed in the scheduling queue. The workflow instance is initiated after
 * the job reaches the top of the queue. An error is thrown if the record in the workflow
 * is invalid or unsupported for that workflow.
 *
 * @restriction Server SuiteScript only
 * @governance 20 units
 *
 * @param {string} recordType The record type of the workflow base record
 * @param {int} [id] Internal ID of the base record
 * @param {int, string} [workflowId] The internal ID (int) or script ID (string) for the
 *                          workflow definition. This is the ID that appears in the
 *                          ID field on the Workflow Definition Page.
 * @param {object} initialValues Name/value pairs representing defaults used during
 *                          workflow initialization
 *
 * @return {string} If the workflow job is successfully placed in queue, the return value is QUEUED
 *                          If the workflow job is not successfully placed in queue,
 *                          one of the following values is returned:
 *
 *                          INQUEUE – Returned if the workflow is already in queue and waiting to
 *                              run. If this status is returned, you must wait until the workflow
 *                              job is finished before attempting to place another instance of the
 *                              workflow in the queue.
 *
 *                          INPROGRESS – Returned if the workflow is currently running.
 *
 * @since 2014.2
 */
function nlapiInitiateWorkflowAsync(recordType, id, workflowId, initialValues) {
}


/**
 * Queue a scheduled script for immediate execution and return the status QUEUED if successful
 *
 * @restriction Server SuiteScript only
 * @governance 20 units
 *
 * @param {string, int} script script ID or internal ID of scheduled script
 * @param {string, int} [deployment] script ID or internal ID of scheduled script deployment
 *                  If empty, the first "free" deployment (i.e. status = Not Scheduled or Completed) will be used
 * @param {Object} [parameters] Object of parameter name->values used in this scheduled script instance
 *
 * @return {string} QUEUED or null if no available deployments were found or the current status
 *                      of the deployment specified if it was not available
 * @since 2008.1
 */
function nlapiScheduleScript(script, deployment, parameters) {
}

/**
 * Creates a recovery point saving the state of the script’s execution. When NetSuite resumes the
 *  execution of the script, it resumes the script at the specified recovery point. Also note that
 *  when the script is resumed, its governance units are reset. Be aware, however, all scheduled
 *  scripts have a 50 MB memory limit
 *
 * Note you can use nlapiSetRecoveryPoint() in conjunction with nlapiYieldScript() to effectively
 *  pause the script until a later time when it is more appropriate to run the script
 *
 * Important: This API can only be called from scheduled scripts; calling this API from any
 *  other script type will result in an error
 *
 * The nlapiSetRecoveryPoint() API consumes 100 units per call
 *
 *  @return {Object} The returned has will contain the following
 *          {string} status:
 *              • SUCCESS – Save point was created
 *              • RESUME – Script is being resumed
 *              • FAILURE – The recovery point was unable to be created. Returns the reason
 *                              for the failure and the footprint size of the script
 *
 *          {string} reason:
 *              • SS_NLAPIYIELDSCRIPT - Yield was called
 *              • SS_ABORT -The JVM unintentionally stopped (native error, no response,
 *                              etc.) --mimics normal "ABORT" states
 *              • SS_MAJOR_RELEASE – A major NetSuite release is pending, processes are being stopped
 *              • SS_EXCESSIVE_MEMORY_FOOTPRINT – The saved object is too big
 *              • SS_CANCELLED – A user requested that the script stop
 *              • SS_DISALLOWED_OBJECT_REFERENCE – The script is attempting to serialize an object
 *                              that is not serializable (see Supported Objects)
 *
 *          {int} size:
 *              • The size of the saved object
 *
 *          {string} information:
 *              • Additional information about the status
 */
function nlapiSetRecoveryPoint() {
}

/**
 * Creates a recovery point and then reschedules the script. The newly rescheduled script has its
 *  governance units reset, and is then placed at the back of the scheduled script queue. To
 *  summarize, nlapiYieldScript works as follows:
 *      1. Creates a new recovery point
 *      2. Creates a new scheduled script with a governance reset
 *      3. Associates the recovery point to the scheduled script
 *      4. Puts the script at the back of the scheduled script queue
 *
 * Note: If the yield call fails, a FAILURE status will be returned. On success, the call does
 *  not return until the script is resumed
 *
 * Calling this function consumes no governance units. Note also, calling this API resets the unit
 *  counter for the currently executing script. Be aware, however, all scheduled scripts have a 50
 *  MB memory limit. Calling this API will not reset the memory size of the script to 0. It only
 *  resets the governance units. For complete details on scheduled script memory limits, see
 *  Understanding Memory Usage in Scheduled Scripts
 *
 * Important: This API can only be called from scheduled scripts. Calling this API from any
 *  other script type will result in an error
 *
 * @return {Object} The returned has will contain the following
 *          {string} status:
 *              • RESUME – Script is being resumed
 *              • FAILURE – The recovery point was unable to be created. Returns the reason
 *                              for the failure and the footprint size of the script
 *
 *          {string} reason:
 *              • SS_NLAPIYIELTDSCRIPT - Yield was called
 *              • SS_ABORT -The JVM unintentionally stopped (native error, no response,
 *                              etc.) --mimics normal "ABORT" states
 *              • SS_MAJOR_RELEASE – A major NetSuite release is pending, processes are being stopped
 *              • SS_EXCESSIVE_MEMORY_FOOTPRINT – The saved object is too big
 *              • SS_CANCELLED – A user requested that the script stop
 *              • SS_DISALLOWED_OBJECT_REFERENCE – The script is attempting to
 *                              serialize an object that is not serializable (see Supported Objects)
 *
 *          {int} size:
 *              • The size of the saved object
 *
 *          {string} information:
 *              • Additional information about the status
 */
function nlapiYieldScript() {
}
