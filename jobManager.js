/**
 * SuiteScript Job Manager APIs
 *
 * Use these APIs to send jobs to NetSuite's internal job manager. Currently the job manager that is exposed to
 * SuiteScript is the job manager that manages merging duplicate records.
 *
 * When submitting a “merge duplicate record” job to NetSuite, SuiteScript allows you to use all of the same
 *  functionality available through the UI. Using SuiteScript you can use NetSuite's predefined duplicate detection
 *  rules, or you can define your own. Note that the merge duplicate API runs in server scripts, such as user event
 *  scripts, Suitelets, and RESTLets. You cannot write client scripts using this API.
 *
 * Important: The merge duplicate functionality of non-entity records is not supported in SuiteScript.
 *
 * Once your records are merged/deleted, these records no longer appear as duplicates accessible through
 *  nlapiSearchDuplicate() or the UI (by going to Lists > Mass Update > Mass Duplicate Record Merge.
 *
 * Finally, be aware that when you submit a merge duplicate job, the maximum number of records you can submit in
 *  your request is 200. Also be aware that then you call nlobjJobManager.submit() to submit your job request,
 *  you are charged 100 governance units.
 */


/**
 * Returns a job manager instance
 *
 * You then use the methods on nlobjJobManager to create and submit your merge duplicate records request.
 * This API is supported in script types that run on the server. You cannot use this function in a client script.
 *
 * @governance 0 units
 *
 * @param {string} jobType Job Type
 *
 * @return {nlobjJobManager}
 * @since 2013.1
 */
function nlapiGetJobManager(jobType) {
}

/**
 * Encapsulates the properties of a job manager.
 * A call to nlapiGetJobManager(jobType) returns a reference to this object. Use the methods in nlobjJobManager
 *  to create and submit your merge duplicate records job request.
 *
 * Important: When submitting a “merge duplicates” job, the maximum size of your job can be 200 record.
 *
 * @constructor
 */
function nlobjJobManager() {
}

/**
 * @return {nlobjDuplicateJobRequest}
 * @since 2013.1
 */
nlobjJobManager.prototype.createJobRequest = function() {
};

/**
 * Use to submit your job request.
 *
 * When submitting a “merge duplicates” job, the maximum size of your job can be 200 record.
 *
 * Be aware that submitting a job places the job into the NetSuite work queue for processing.
 * Submitting a job does not mean that the job is executed right away
 *
 * @param {nlobjDuplicateJobRequest} request Job request
 *
 * @return {string} Job Id
 * @since 2013.1
 */
nlobjJobManager.prototype.submit = function(request) {
};

/**
 * Then use the methods on the nlobFuture object to check the status of the job
 *
 * @governance 5 units
 *
 * @param {string} id Job Id
 *
 * @return {nlobjFuture}
 * @since 2013.1
 */
nlobjJobManager.prototype.getFuture = function(id) {
};

/**
 * Primary object used to encapsulate all the properties of a merge duplicate record job request.
 *
 * Note that nlobjJobManager.createJobRequest() returns a reference to this object.
 *
 * Use the methods in nlobjDuplicateJobRequest to define the criteria of your merge duplicate request.
 * @constructor
 */
function nlobjDuplicateJobRequest() {
}

/**
 * Constant for Merge Duplicate records Entity Types
 * @since 2013.1
 */
nlobjDuplicateJobRequest.prototype.ENTITY_CUSTOMER = 'CUSTOMER';
nlobjDuplicateJobRequest.prototype.ENTITY_CONTACT = 'CONTACT';
nlobjDuplicateJobRequest.prototype.ENTITY_LEAD = 'LEAD';
nlobjDuplicateJobRequest.prototype.ENTITY_PROSPECT = 'PROSPECT';
nlobjDuplicateJobRequest.prototype.ENTITY_PARTNER = 'PARTNER';
nlobjDuplicateJobRequest.prototype.ENTITY_VENDOR = 'VENDOR';

/**
 * Constant for Merge Duplicate records Merge MASTERSELECTIONMODE
 * @since 2013.1
 */
nlobjDuplicateJobRequest.prototype.MASTERSELECTIONMODE_CREATED_EARLIEST = 'CREATED_EARLIEST';
nlobjDuplicateJobRequest.prototype.MASTERSELECTIONMODE_MOST_RECENT_ACTIVITY = 'MOST_RECENT_ACTIVITY';
nlobjDuplicateJobRequest.prototype.MASTERSELECTIONMODE_MOST_POPULATED_FIELDS = 'MOST_POPULATED_FIELDS';
nlobjDuplicateJobRequest.prototype.MASTERSELECTIONMODE_SELECT_BY_ID = 'SELECT_BY_ID';

/**
 * Constant for Merge Duplicate records Merge operation
 * @since 2013.1
 */
nlobjDuplicateJobRequest.prototype.OPERATION_MERGE = 'MERGE';
nlobjDuplicateJobRequest.prototype.OPERATION_DELETE = 'DELETE';
nlobjDuplicateJobRequest.prototype.OPERATION_MAKE_MASTER_PARENT = 'MAKE_MASTER_PARENT';
nlobjDuplicateJobRequest.prototype.OPERATION_MARK_AS_NOT_DUPES = 'MARK_AS_NOT_DUPES';

/**
 * @param {string} entityType Entity Type
 * @return {void}
 * @since 2013.1
 */
nlobjDuplicateJobRequest.prototype.setEntityType = function(entityType) {
};

/**
 * @param {string} masterID Master record ID
 * @return {void}
 * @since 2013.1
 */
nlobjDuplicateJobRequest.prototype.setMasterId = function(masterID) {
};

/**
 * @param {string} masterSelectionMode Criteria
 * @return {void}
 * @since 2013.1
 */
nlobjDuplicateJobRequest.prototype.setMasterSelectionMode = function(masterSelectionMode) {
};

/**
 * @param {string[]} dupeRecords Array of duplicate records IDs
 * @return {void}
 * @since 2013.1
 */
nlobjDuplicateJobRequest.prototype.setRecords = function(dupeRecords) {
};

/**
 * @param {string} operation
 * @return {void}
 * @since 2013.1
 */
nlobjDuplicateJobRequest.prototype.setOperation = function(operation) {
};

/**
 * @return Entity Type
 * @since 2013.1
 */
nlobjDuplicateJobRequest.prototype.getEntityType = function() {
};

/**
 * @return Master record ID
 * @since 2013.1
 */
nlobjDuplicateJobRequest.prototype.getMasterId = function() {
};

/**
 * @return Master Selection Mode
 * @since 2013.1
 */
nlobjDuplicateJobRequest.prototype.getMasterSelectionMode = function() {
};

/**
 * @return Array of duplicate records IDs
 * @since 2013.1
 */
nlobjDuplicateJobRequest.prototype.getRecords = function() {
};

/**
 * @return Operation
 * @since 2013.1
 */
nlobjDuplicateJobRequest.prototype.getOperation = function() {
};

/**
 * Encapsulates the properties of a merge duplicate record job status
 *
 * @constructor
 */
function nlobjFuture() {
}

/**
 * @return {boolean} status
 * @since 2013.1
 */
nlobjFuture.prototype.isDone = function() {
};

/**
 * @return {string} Job ID
 * @since 2013.1
 */
nlobjFuture.prototype.getId = function() {
};

/**
 * @return {boolean} is cancelled or not
 * @since 2013.1
 */
nlobjFuture.prototype.isCancelled = function() {
};
