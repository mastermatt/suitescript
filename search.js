/**
 * SuiteScript Search APIs
 *
 * Similar to much of the searching functionality available through the NetSuite UI, SuiteScript Search APIs
 *  allow you to retrieve real-time data from your account. You can search for a single record by keywords,
 *  create saved searches, search for duplicate records, or return a set of records that match filters you define.
 */


/**
 * Creates a new search.
 *
 * The search can be modified and run as an ad-hoc search, without saving it.
 * Alternatively, calling nlobjSearch.saveSearch(title, scriptId) will save the search to the database,
 *  so it can be reused later in the UI or using nlapiLoadSearch(type, id).
 *
 *  Note: You can further filter the returned nlobjSearch object by passing additional filter values.
 *  You will do this using the nlobjSearch.addFilter(filter) method or nlobjSearch.addFilters(filters) method.
 *
 * @param {string} type The record internal ID of the record type you are searching
 * @param {nlobjSearchFilter | nlobjSearchFilter[] | Object[] } [filters]
 * @param {nlobjSearchColumn|nlobjSearchColumn[]} [columns]
 *
 * @return {nlobjSearch}
 * @since 2012.1
 */
function nlapiCreateSearch(type, filters, columns) {
}

/**
 * Loads an existing saved search.
 * The saved search could have been created using the UI, or created using
 *  nlapiCreateSearch(type, filters, columns) in conjunction with nlobjSearch.saveSearch(title, scriptId).
 *
 * @governance 5 units
 *
 * @param {string} [type]
 * @param {string} id  The internal ID or script ID of the saved search.
 *          The script ID of the saved search is required, regardless of whether you specify the search type.
 *          If you do not specify the search type, you must set type to null and then set the script/search ID.
 *
 * @return {nlobjSearch}
 * @since 2012.1
 */
function nlapiLoadSearch(type, id) {
}

/**
 * Perform a duplicate record search using Duplicate Detection criteria
 *
 * @governance 10 units
 * @restriction returns the first 1000 rows in the search
 *
 * @param {string} type The recordType you are checking duplicates for
 *          (for example, customer|lead|prospect|partner|vendor|contact)
 * @param {string[]} [fields] array of field names used to detect duplicate
 *          (for example, companyname|email|name|phone|address1|city|state|zipcode)
 * @param {int} [id] internal ID of existing record. Depending on the use case, id may or may not be a required argument
 * @return {nlobjSearchResult[]} Returns an Array of nlobjSearchResult objects corresponding to the duplicate records
 * @since 2008.1
 */
function nlapiSearchDuplicate(type, fields, id) {
}

/**
 * Perform a global record search across the system
 * @governance 10 units
 * @restriction returns the first 1000 rows in the search
 *
 * @param {string} keywords Global search keywords string or expression
 * @return {nlobjSearchResult[]} Returns an Array of nlobjSearchResult objects containing the following four columns:
 *              name, type (as shown in the UI), info1, and info2
 * @since 2008.1
 */
function nlapiSearchGlobal(keywords) {
}

/**
 * Perform a record search using an existing search or filters and columns
 *
 * This API is supported in client, user event, scheduled, portlet, and Suitelet scripts
 *
 * @governance 10 units
 * @restriction returns the first 1000 rows in the search
 * Also note that in search/lookup operations, long text fields are truncated at 4,000 characters.
 *
 * @param {string} type record type ID
 * @param {int, string} [id] The internal ID or script ID for the saved search to use for search
 * @param {nlobjSearchFilter, nlobjSearchFilter[]} [filters] [optional] A single nlobjSearchFilter object
 *              - or - an array of nlobjSearchFilter objects
 * @param {nlobjSearchColumn, nlobjSearchColumn[]} [columns] [optional] A single nlobjSearchColumn object
 *              - or - an array of nlobjSearchColumn objects
 *
 * @return {nlobjSearchResult[]|null} Returns an array of nlobjSearchResult objects corresponding to the searched
 *              records, if no records are found null is returned.
 *
 * @exception {SSS_INVALID_RECORD_TYPE}
 * @exception {SSS_TYPE_ARG_REQD}
 * @exception {SSS_INVALID_SRCH_ID}
 * @exception {SSS_INVALID_SRCH_FILTER}
 * @exception {SSS_INVALID_SRCH_FILTER_JOIN}
 * @exception {SSS_INVALID_SRCH_OPERATOR}
 * @exception {SSS_INVALID_SRCH_COL_NAME}
 * @exception {SSS_INVALID_SRCH_COL_JOIN}
 * @since 2007.0
 */
function nlapiSearchRecord(type, id, filters, columns) {
}

/**
 * Primary object used to encapsulate a NetSuite saved search.
 * Note, however, you are not required to save the search results returned in this object.
 *
 * @constructor
 */
function nlobjSearch() {
}

/**
 * Adds a single return column to the search. Note that existing columns on the search are not changed.
 *
 * @param {nlobjSearchColumn} column The nlobjSearchColumn you want added to the search
 *
 * @return {void}
 * @since 2012.1
 */
nlobjSearch.prototype.addColumn = function(column) {
};

/**
 * Add multiple return column to the search. Note that existing columns on the search are not changed.
 *
 * @param {nlobjSearchColumn[]} columns The nlobjSearchColumn set you want added to the search
 *
 * @return {void}
 * @since 2012.1
 */
nlobjSearch.prototype.addColumns = function(columns) {
};

/**
 * Adds a single search filter.
 *
 * Note that existing filters on the search are not changed.
 * Note: This method does not accept a search filter expression (Object[]) as parameter.
 * Only a single search filter (nlobjSearchFilter) is accepted.
 *
 * @param {nlobjSearchFilter} filter
 *
 * @return {void}
 * @since 2012.1
 */
nlobjSearch.prototype.addFilter = function(filter) {
};

/**
 * Adds a search filter list.
 *
 * Note that existing filters on the search are not changed.
 * Note: This method does not accept a search filter expression (Object[]) as parameter.
 * Only a single search filter (nlobjSearchFilter) is accepted.
 *
 * @param {nlobjSearchFilter[]} filters
 *
 * @return {void}
 * @since 2012.1
 */
nlobjSearch.prototype.addFilters = function(filters) {
};

/**
 * Deletes a given saved search that was created through scripting or through the UI.
 * If you have created a saved search through the UI, you can load the search using
 *  nlapiLoadSearch(type, id) and then call deleteSearch() to delete it.
 * In scripting if you have created a search using nlapiCreateSearch(type, filters, columns)
 *  and saved the search using the nlobjSearch.saveSearch(title, scriptId),
 *  you can then load the search and call deleteSearch() to delete it.
 *
 * @return {void}
 * @since 2012.1
 */
nlobjSearch.prototype.deleteSearch = function() {
};

/**
 * Gets the search return columns for the search
 *
 * @return {nlobjSearchColumn[]}
 * @since 2012.1
 */
nlobjSearch.prototype.getColumns = function() {
};

/**
 * Gets the filter expression for the search
 *
 * @return {Object[]}
 * @since 2012.2
 */
nlobjSearch.prototype.getFilterExpression = function(param) {
};

/**
 * Gets the filters for the search.
 *
 * Note: This method does not return a search filter expression (Object[]). Only a search filter list
 *      (nlobjSearchFilter[]) is returned. If you want to get a search filter expression, see getFilterExpression().
 *
 * @return {nlobjSearchFilter[]}
 * @since 2012.1
 */
nlobjSearch.prototype.getFilters = function() {
};

/**
 * Gets the internal ID of the search. The internal ID is available only when the search is either
 *  loaded using nlapiLoadSearch(type, id) or has been saved using nlobjSearch.saveSearch(title, scriptId).
 *
 * If this is an ad-hoc search (created with nlapiCreateSearch(type, filters, columns)), this method will return null.
 *
 * @return {string|null} Typical return values will be something like 55 or 234 or 87.
 *              You will not receive a value such as customsearch_mysearch. Any ID prefixed with
 *              customsearch is considered a script ID, not the search’s internal system ID.
 *
 * @return {int}
 * @since 2012.1
 */
nlobjSearch.prototype.getId = function() {
};

/**
 * Gets whether the nlobjSearch has been set as public search
 *
 * @return {boolean}
 * @since 2012.1
 */
nlobjSearch.prototype.getIsPublic = function() {
};

/**
 * Gets the script ID of the search. The script ID is available only when the search is either
 *  loaded using nlapiLoadSearch(type, id) or has been saved using nlobjSearch.saveSearch(title, scriptId).
 *
 * If this is an ad-hoc search (created with nlapiCreateSearch(type, filters, columns)), this method will return null.
 *
 * @return {string} The script ID of the search as a string.
 *              Typical return values will be something like customsearch_mysearch or customsearchnewinvoices.
 *              You will not receive values such as 55 or 234 or 87. These are considered internal system IDs
 *              assigned by NetSuite when you first save the search.
 *
 * @since 2012.1
 */
nlobjSearch.prototype.getScriptId = function() {
};

/**
 * Returns the record type that the search was based on.
 * This method is helpful when you have the internal ID of the search,
 *  but do not know the record type the search was based on.
 *
 * @return {string} For example, if the search was on a Customer record, customer will be returned;
 *              if the search was on the Sales Order record type, salesorder will be returned.
 * @since 2012.1
 */
nlobjSearch.prototype.getSearchType = function() {
};

/**
 * Runs an ad-hoc search, returning the results.
 * Be aware that calling this method does NOT save the search. Using this method in conjunction
 *  with nlapiCreateSearch(type, filters, columns) allows you to create and run ad-hoc searches
 *  that are never saved to the database, much like nlapiSearchRecord(...).
 *
 * Note that this method returns the nlobjSearchResultSet object, which provides you with more
 *  flexibility when working with or iterating through your search results.
 *  Therefore, you may also want to use runSearch() in conjunction with nlapiLoadSearch(...).
 *  By doing so you can load an existing saved search, call runSearch(), and then (if you choose):
 *  • retrieve a slice of the search results from anywhere in the result list
 *  • paginate through the search results.
 *
 * @return {nlobjSearchResultSet}
 * @since 2012.1
 */
nlobjSearch.prototype.runSearch = function(param) {
};

/**
 * Saves the search created by nlapiCreateSearch(type, filters, columns)
 *
 * Important: Loading a search and saving it with a different title and/or script ID does not create a new search.
 * It only modifies the title and/or script ID for the existing search.
 *
 * @governance 5 units
 *
 * @param {string} [title] The title you want to give the saved search.
 *                  Note that title is required when saving a new search, but optional when saving a search that
 *                  was loaded using nlapiLoadSearch(type, id) or has already been saved by calling
 *                  saveSearch(title, scriptId) before.
 * @param {string} [scriptId] The script ID you want to assign to the saved search.
 *                  All saved search script IDs must be prefixed with customsearch
 *
 * @return {string} The internal ID of the search
 * @since 2012.1
 */
nlobjSearch.prototype.saveSearch = function(title, scriptId) {
};

/**
 * Sets the return columns for this search, overwriting any prior columns.
 * If null is passed in it is treated as if it were an empty array and removes any existing columns on the search
 *
 * @param {nlobjSearchColumn[]} columns
 *
 * @return {void}
 * @since 2012.1
 */
nlobjSearch.prototype.setColumns = function(columns) {
};

/**
 * Sets the search filter expression, overwriting any prior filters.
 * If null is passed in, it is treated as if it was an empty array and removes any existing filters on this search.
 *
 * Note: This method can be followed by the addFilter(filter) and addFilters(filters) methods.
 * The additional filters will be appended with the current filters on the search through an ‘AND’ operator.
 *
 * @param {Object[]} filterExpression
 *
 * @return {void}
 * @since 2012.2
 */
nlobjSearch.prototype.setFilterExpression = function(filterExpression) {
};

/**
 * Sets the filters for this search, overwriting any prior filters.
 * If null is passed in it is treated as if it were an empty array and removes any existing filters on this search.
 *
 * Note: This method does not accept a search filter expression (Object[]) as parameter.
 * Only a search filter list (nlobjSearchFilter[]) is accepted.
 *
 * @param {nlobjSearchFilter[]} filters
 *
 * @return {void}
 * @since 2012.1
 */
nlobjSearch.prototype.setFilters = function(filters) {
};

/**
 * Sets whether the search is public or private.
 * By default, all searches created through nlapiCreateSearch(type, filters, columns) are private.
 *
 * @param isPublic
 *
 * @return {void}
 * @since 2012.1
 */
nlobjSearch.prototype.setIsPublic = function(isPublic) {
};

/**
 * Acts like nlapiSetRedirectURL(type, identifier, id, editmode, parameters) but redirects end users to a
 *  populated search definition page. You can use this method with any kind of search that is held in the
 *  nlobjSearch object. This could be:
 *      • an existing saved search,
 *      • an ad-hoc search that you are building in SuiteScript, or
 *      • a search you have loaded and then modified (using addFilter, setFilters, addFilters, addColumn, addColumns,
 *              or setColumns) but do not save.
 *
 * Note that this method does not return a URL. It works by loading a search into the session,
 *  and then redirecting to a URL that loads the search definition page.
 *
 * This method is supported in afterSubmit user event scripts and in client scripts.
 *
 * @return {void}
 * @since 2012.1
 */
nlobjSearch.prototype.setRedirectURLToSearch = function() {
};

/**
 * Acts like nlapiSetRedirectURL(type, identifier, id, editmode, parameters) but redirects end users to a search
 * results page. You can use this method with any kind of search that is held in the nlobjSearch object. This could be:
 *      • an existing saved search,
 *      • an ad-hoc search that you are building in SuiteScript, or
 *      • a search you have loaded and then modified (using addFilter, setFilters, addFilters, addColumn, addColumns,
 *              or setColumns) but do not save.
 *
 * Note that this method does not return a URL. It works by loading a search into the session, and then redirecting
 *  to a URL that loads the search results.
 *
 * This method is supported in afterSubmit user event scripts and in client scripts.
 *
 * @return {void}
 * @since 2012.1
 */
nlobjSearch.prototype.setRedirectURLToSearchResults = function() {
};

/**
 * Return a new instance of nlobjSearchColumn used for column objects used to define search return columns
 *
 * @constructor
 *
 * @param {string} name column name
 * @param {string} [join] internal ID for joined search where this column is defined
 * @param {string} [summary] The summary type for this column (group, sum, count, avg, min, max)
 *
 * @since 2007.0
 */
function nlobjSearchColumn(name, join, summary) {
}

/**
 * Return the name of this search column
 *
 * @return {string}
 * @since 2008.1
 */
nlobjSearchColumn.prototype.getName = function() {
};

/**
 * Return the join id for this search column
 *
 * @return {string}
 * @since 2008.1
 */
nlobjSearchColumn.prototype.getJoin = function() {
};

/**
 * Return the label of this search column
 *
 * @return {string}
 * @since 2009.1
 */
nlobjSearchColumn.prototype.getLabel = function() {
};

/**
 * Set the label used for this column
 *
 * @param {string} label The label used for this column
 *
 * @returns {nlobjSearchColumn}
 * @since 2011.1
 */
nlobjSearchColumn.prototype.setLabel = function(label) {
};

/**
 * Return the summary type (avg,group,sum,count) of this search column
 *
 * @return {string}
 * @since 2008.1
 */
nlobjSearchColumn.prototype.getSummary = function() {
};

/**
 * @return {string} Returns the formula used for this column
 * @since 2009.2
 */
nlobjSearchColumn.prototype.getFormula = function() {
};

/**
 * Set the formula used for this column. Name of the column can either be formulatext,
 * formulanumeric, formuladatetime, formulapercent, or formulacurrency
 *
 * @param {string} formula The formula used for this column
 *
 * @return {nlobjSearchColumn}
 * @since 2011.1
 */
nlobjSearchColumn.prototype.setFormula = function(formula) {
};

/**
 * @return {string} The function used in this search column
 * @since 2009.2
 */
nlobjSearchColumn.prototype.getFunction = function() {
};

/**
 * Sets the special function used for this column
 *
 * @param {string} functionID Special function used for this column
 *
 * The following is a list of supported functions and their internal IDs:
 *   ID                 Name                    Date Function   Output
 * ------------------|-----------------------|----------------|-------------
 *   percentOfTotal     % of Total              No              percent
 *   absoluteValue      Absolute Value          No
 *   ageInDays          Age In Days             Yes             integer
 *   ageInHours         Age In Hours            Yes             integer
 *   ageInMonths        Age In Months           Yes             integer
 *   ageInWeeks         Age In Weeks            Yes             integer
 *   ageInYears         Age In Years            Yes             integer
 *   calendarWeek       Calendar Week           Yes             date
 *   day                Day                     Yes             date
 *   month              Month                   Yes             text
 *   negate             Negate                  No
 *   numberAsTime       Number as Time          No              text
 *   quarter            Quarter                 Yes             text
 *   rank               Rank                    No              integer
 *   round              Round                   No
 *   roundToHundredths  Round to Hundredths     No
 *   roundToTenths      Round to Tenths         No
 *   weekOfYear         Week of Year            Yes             text
 *   year               Year                    Yes             text
 *
 * @return {nlobjSearchColumn}
 * @since 2011.1
 */
nlobjSearchColumn.prototype.setFunction = function(functionID) {
};

/**
 * Returns the sort direction for this column
 *
 * @return {string}
 * @since 2008.1
 */
nlobjSearchColumn.prototype.getSort = function() {
};

/**
 * Return nlobjSearchColumn sorted in either ascending or descending order
 *
 * @param {boolean} [order=false] If not set, defaults to false, which returns column data in ascending order
 *
 * @return {nlobjSearchColumn}
 * @since 2010.1
 */
nlobjSearchColumn.prototype.setSort = function(order) {
};

/**
 * Returns the search column for which the minimal or maximal value should be found when
 * returning the nlobjSearchColumn value
 * For example, can be set to find the most recent or earliest date, or the largest or smallest
 * amount for a record, and then the nlobjSearchColumn value for that record is returned
 * Can only be used when min or max is passed as the summary parameter in the
 * nlobjSearchColumn constructor
 *
 * @param {string} name The name of the search column for which the minimal or maximal
 * @param {string} join The join id for this search column
 *
 * @return {nlobjSearchColumn}
 * @since 2012.1
 */
nlobjSearchColumn.prototype.setWhenOrderedBy = function(name, join) {
};

/**
 * Return a new instance of nlobjSearchFilter filter objects used to define search criteria
 *
 * @constructor
 *
 * @param {string} name filter name
 * @param {string} join internal ID for joined search where this filter is defined
 * @param {string} operator operator name. Any of:
 *          after                           anyof                               before
 *          between                         contains                            doesnotcontain
 *          doesnotstartwith                equalto                             greaterthan
 *          greaterthanorequalto            haskeywords                         is
 *          isempty                         isnot                               isnotempty
 *          lessthan                        lessthanorequalto                   noneof
 *          notafter                        notbefore                           notbetween
 *          notequalto                      notgreaterthan                      notgreaterthanorequalto
 *          notlessthan                     notlessthanorequalto                noton
 *          notonorafter                    notonorbefore                       notwithin
 *          on                              onorafter                           onorbefore
 *          startswith                      within
 *
 * @param {string, Date|string[]|int} [value1]
 * @param {string, Date} [value2]
 *
 * @since 2007.0
 */
function nlobjSearchFilter(name, join, operator, value1, value2) {
}

/**
 * Returns the formula used for this filter
 *
 * @return {string}
 * @since 2011.1
 */
nlobjSearchFilter.prototype.getFormula = function() {
};

/**
 * Sets the formula used for this filter.
 *
 * @param {string} formula The formula used for this filter
 *
 * @return {nlobjSearchFilter}
 * @since 2011.1
 */
nlobjSearchFilter.prototype.setFormula = function(formula) {
};

/**
 * Return the name of this search filter
 *
 * @return {string}
 * @since 2007.0
 */
nlobjSearchFilter.prototype.getName = function() {
};

/**
 * Return the join id for this search filter
 *
 * @return {string}
 * @since 2008.1
 */
nlobjSearchFilter.prototype.getJoin = function() {
};

/**
 * Return the filter operator used
 *
 * @return {string}
 * @since 2008.2
 */
nlobjSearchFilter.prototype.getOperator = function() {
};

/**
 * Returns the summary type used for this filter
 *
 * @return {string}
 * @since 2011.1
 */
nlobjSearchFilter.prototype.getSummaryType = function() {
};

/**
 * @param {string} type The summary type used for this filter.
 *   In your script, use one of the following summary type IDs:
 *      Summary type ID (used in script)            Summary Label (as seen in UI)
 *    ----------------------------------------|----------------------------------------------------------
 *      max                                         Maximum
 *      min                                         MinimumSuiteScript Objects
 *      avg                                         Average (only valid for numeric or currency fields)
 *      sum                                         Sum (only valid for numeric or currency fields)
 *      count                                       Count
 *
 * @return {nlobjSearchFilter}
 * @since 2011.1
 */
nlobjSearchFilter.prototype.setSummaryType = function(type) {
};

/**
 * Class definition for interacting with the results of a search operation
 * Return a new instance of nlobjSearchResult used for search result row object
 *
 * @constructor
 */
function nlobjSearchResult() {
}

/**
 * Return the internalId for the record returned in this row
 *
 * @return {int}
 */
nlobjSearchResult.prototype.getId = function() {
};

/**
 * Return the recordtype for the record returned in this row
 *
 * @return {string}
 */
nlobjSearchResult.prototype.getRecordType = function() {
};

/**
 * Return the value for a return column specified by name, join ID, and summary type
 *
 * @param {nlobjSearchColumn|string} columnOrName search result column or the name of the search column
 * @param {string} [join] the join ID for the search column
 * @param {string} [summary] summary type specified for this column
 *
 * @return {string}
 * @since 2008.1
 */
nlobjSearchResult.prototype.getValue = function(columnOrName, join, summary) {
};

/**
 * Return the text value of this return column if it's a select field
 *
 * @param {nlobjSearchColumn|string} columnOrName search result column or the name of the search column
 * @param {string} [join] the join ID for the search column
 * @param {string} [summary] summary type specified for this column
 *
 * @return {string}
 * @since 2008.1
 */
nlobjSearchResult.prototype.getText = function(columnOrName, join, summary) {
};

/**
 * Return an array of all nlobjSearchColumn objects returned in this search
 *
 * @return {nlobjSearchColumn[]}
 * @since 2009.2
 */
nlobjSearchResult.prototype.getAllColumns = function() {
};

/**
 * Primary object used to encapsulate a set of search results.
 * The nlobjSearchResultSet object provides both an iterator interface, which allows you to process
 *  each result of the search, and stop at any time, and a slice interface, which allows you to
 *  retrieve an arbitrary segment of the search results, up to 1000 results at a time.
 */
function nlobjSearchResultSet() {
}

/**
 * Calls the developer-defined callback function for every result in this set.
 *
 * There is a limit of 4000 rows in the result set returned in forEachResult().
 * Your callback function must have the following signature: boolean callback(nlobjSearchResult result);
 *
 * Note that the work done in the context of the callback function counts towards the
 *  governance of the script that called it. For example, if the callback function is running in the context of
 *  a scheduled script, which has a 10,000 unit governance limit, you must be sure the amount of processing within
 *  the callback function does not put the entire script at risk of exceeding scheduled script governance limits.
 *
 * @governance 10 units
 *
 * @param {function} callback
 *
 * @return {void}
 * @since 2012.1
 */
nlobjSearchResultSet.prototype.forEachResult = function(callback) {
};

/**
 * Returns a list of nlobjSearchColumn objects for this result set.
 *
 * This list contains one nlobjSearchColumn object for each result column in the
 *  nlobjSearchResult objects returned by this search.
 *
 * @return {nlobjSearchColumn[]}
 * @since 2012.1
 */
nlobjSearchResultSet.prototype.getColumns = function() {
};

/**
 * Retrieve a slice of the search result.
 *
 * @param {int} start The inclusive index of the first result to return
 * @param {int} end The exclusive index of the last result to return
 *
 * @return {nlobjSearchResult[]}
 * @exception {SSS_INVALID_SEARCH_RESULT_INDEX} if start is negative
 * @exception {SSS_SEARCH_RESULT_LIMIT_EXCEEDED} if more than 1000 rows are requested
 * @since 2012.1
 */
nlobjSearchResultSet.prototype.getResults = function(start, end) {
};
