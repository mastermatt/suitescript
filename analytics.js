/**
 * SuiteScript SuiteAnalytics APIs
 */


/**
 * Creates an instance of a report definition object.
 *
 * The report is built on this object using subsequent methods. The report definition can be used
 * to create a form for rendering the pivot table report in a browser, or the pivot table APIs
 * can be used to extract the values of the individual rows and columns of the pivot table.
 *
 * @return {nlobjReportDefinition}
 * @since 2012.2
 */
function nlapiCreateReportDefinition() {
}

/**
 * Creates an nlobjReportForm object to render the report definition.
 *
 * @param {string} title The title of the form
 *
 * @return {nlobjReportForm}
 * @since 2012.2
 */
function nlapiCreateReportForm(title) {
}

/**
 * Object used to encapsulate a pivot table column
 *
 * @constructor
 * @since 2012.2
 */
function nlobjPivotColumn() {
}

/**
 * @return {string}
 * @since 2012.2
 */
nlobjPivotColumn.prototype.getAlias = function() {
};

/**
 * @return {nlobjPivotColumn|null}
 * @since 2012.2
 */
nlobjPivotColumn.prototype.getParent = function() {
};

/**
 * @return {string}
 * @since 2012.2
 */
nlobjPivotColumn.prototype.getLabel = function() {
};

/**
 * @return {nlobjPivotColumn|null}
 * @since 2012.2
 */
nlobjPivotColumn.prototype.getSummaryLine = function() {
};

/**
 * @return {Object}
 * @since 2012.2
 */
nlobjPivotColumn.prototype.getValue = function() {
};

/**
 * @return {nlobjPivotColumn[]|null} Null if no children columns exist
 * @since 2012.2
 */
nlobjPivotColumn.prototype.getVisibleChildren = function() {
};

/**
 * @return {boolean}
 * @since 2012.2
 */
nlobjPivotColumn.prototype.isHidden = function() {
};

/**
 * Object used to encapsulate a pivot table row
 *
 * @constructor
 * @since 2012.2
 */
function nlobjPivotRow() {
}

/**
 * @return {string}
 * @since 2012.2
 */
nlobjPivotRow.prototype.getAlias = function() {
};

/**
 * @return {nlobjPivotRow[]|null} Null if the row is a detail line or if there are no children
 * @since 2012.2
 */
nlobjPivotRow.prototype.getChildren = function() {
};

/**
 * @return {string}
 * @since 2012.2
 */
nlobjPivotRow.prototype.getLabel = function() {
};

/**
 * @return {nlobjPivotRow|null} Null if the row does not exist
 * @since 2012.2
 */
nlobjPivotRow.prototype.getParent = function() {
};

/**
 * @return {nlobjPivotRow|null} Null if the row is a detail line
 * @since 2012.2
 */
nlobjPivotRow.prototype.getSummaryLine = function() {
};

/**
 * @param {nlobjPivotColumn} [pivotColumn]
 *
 * @return {Object|null} The value of the row hierarchy, or null if isDetailLine returns false
 * @since 2012.2
 */
nlobjPivotRow.prototype.getValue = function(pivotColumn) {
};

/**
 * @return {boolean}
 * @since 2012.2
 */
nlobjPivotRow.prototype.isDetailLine = function() {
};

/**
 * @constructor
 * @since 2012.2
 */
function nlobjPivotTable() {
}

/**
 * @return {nlobjPivotRow}
 * @since 2012.2
 */
nlobjPivotTable.prototype.getColumnHierarchy = function() {
};

/**
 * @return {nlobjPivotRow}
 * @since 2012.2
 */
nlobjPivotTable.prototype.getRowHierarchy = function() {
};

/**
 * Handle to the pivot table object. A handle is a reference which points to the pivot table
 *
 * @constructor
 * @since 2012.2
 */
function nlobjPivotTableHandle() {
}

/**
 * Get the pivot table object from the report definition
 *
 * Note: This is a blocking call and it will wait until the report definition execution has finished.
 *  Using isReady() is recommended to check execution state if blocking is unacceptable.
 *
 * @return {nlobjPivotTable}
 * @since 2012.2
 */
nlobjPivotTableHandle.prototype.getPivotTable = function() {
};

/**
 * Returns the completion status flag of the report definition execution
 *
 * @return {boolean}
 * @since 2012.2
 */
nlobjPivotTableHandle.prototype.isReady = function() {
};

/**
 * Object used to encapsulate a report column on a pivot report.
 *
 * @constructor
 * @since 2012.2
 */
function nlobjReportColumn() {
}

/**
 * @return {string|null}
 * @since 2012.2
 */
nlobjReportColumn.prototype.getFormula = function() {
};

/**
 * @return {nlobjReportColumnHierarchy}
 * @since 2012.2
 */
nlobjReportColumn.prototype.getParent = function() {
};

/**
 * @return {boolean}
 * @since 2012.2
 */
nlobjReportColumn.prototype.isMeasure = function() {
};

/**
 * Object used to encapsulate the report column hierarchy
 *
 * @constructor
 * @since 2012.2
 */
function nlobjReportColumnHierarchy() {
}

/**
 * Get the children reference of this column hierarchy
 *
 * @return {nlobjReportColumnHierarchy}
 * @since 2012.2
 */
nlobjReportColumnHierarchy.prototype.getChildren = function() {
};

/**
 * @return {nlobjReportColumnHierarchy|null}
 * @since 2012.2
 */
nlobjReportColumnHierarchy.prototype.getParent = function() {
};

/**
 * The primary object that contains the definition of the report
 *
 * @constructor
 * @since 2012.2
 */
function nlobjReportDefinition() {
}

/**
 * Add a column to the report definition
 *
 * @param {string} alias
 * @param {boolean} isMeasure
 * @param {string} label The column label that will be displayed on the report.
 * @param {nlobjReportColumnHierarchy} [parent] The reference to the parent column in the hierarchy.
 *                  If null, then this column will not be associated with a parent column.
 * @param {string} format The data type that this column represents.
 * @param {string} [formula] A string which describes a mathematical formula in the format
 *                      of “F(x,y,z) = mathematical function”, where x,y,z are previously defined
 *                      aliases from addRowHierarchy, addColumnHierarchy, or addColumn calls.
 *
 * @return {nlobjReportColumn} The reference to the nlobjReportColumn object.
 * @since 2012.2
 */
nlobjReportDefinition.prototype.addColumn = function(alias, isMeasure, label, parent, format, formula) {
};

/**
 *
 * @param {string} alias
 * @param {string} label
 * @param {nlobjReportColumnHierarchy} [parent] The reference of the parent column in the hierarchy.
 *                  If null, then this column will be the root (top level) column.
 * @param {string} format
 *
 * @return {nlobjReportColumnHierarchy} The reference to the nlobjReportColumnHierarchy object.
 * @since 2012.2
 */
nlobjReportDefinition.prototype.addColumnHierarchy = function(alias, label, parent, format) {
};

/**
 *
 * @param {string} alias
 * @param {string} label
 * @param {string} format
 *
 * @return {nlobjReportRowHierarchy} The reference to the nlobjReportRowHierarchy object.
 * @since 2012.2
 */
nlobjReportDefinition.prototype.addRowHierarchy = function(alias, label, format) {
};

/**
 * Attaches a search as a data source to the report definition.
 *
 * @param {string} searchType
 * @param {string} id The internal id if you are using a saved search as a data source.
 * @param {nlobjSearchFilter[]} filters Note: Search filter expression as filters parameter is currently not supported.
 * @param {nlobjSearchColumn[]} columns
 * @param {string} map The mapping of rows/columns of the search to the report.
 *
 * @return {void}
 * @since 2012.2
 */
nlobjReportDefinition.prototype.addSearchDatasource = function(searchType, id, filters, columns, map) {
};

/**
 * Creates the form for rendering from the report definition
 *
 * Note: Only one synchronous pivot table execution is allowed at a time.
 *  If a second synchronous execution is called, it will invalidate the first pivot table.
 *
 * @param {nlobjReportForm} [form]  The form object created with nlapiCreateReportForm.
 *              If not specified the call waits until the execution is finished (synchronous)
 *              and an nlobjPivotTable will be available from the handle. If the parameter is set,
 *              the call returns immediately and the returned value references the nlobjReportForm
 *              - a pivot table handle will not be available in this case.
 *
 * @return {nlobjPivotTableHandle} The identifier of the pivot table handle, or nlobjReportForm
 * @since 2012.2
 */
nlobjReportDefinition.prototype.executeReport = function(form) {
};

/**
 *
 * @param {string} [title]
 *
 * @return {void}
 * @since 2012.2
 */
nlobjReportDefinition.prototype.setTitle = function(title) {
};

/**
 * Object used to encapsulate the report form and render the report in HTML
 *
 * @constructor
 * @since 2012.2
 */
function nlobjReportForm() {
}

/**
 * Object used to encapsulate the report row hierarchy
 *
 * @constructor
 * @since 2012.2
 */
function nlobjReportRowHierarchy() {
}

/**
 * @return {nlobjReportRowHierarchy} The child reference to the nlobjReportRowHierarchy object
 * @since 2012.2
 */
nlobjReportRowHierarchy.prototype.getChildren = function() {
};

/**
 * @return {nlobjReportRowHierarchy|null} Either the parent reference to the nlobjReportRowHierarchy object or null.
 * @since 2012.2
 */
nlobjReportRowHierarchy.prototype.getChildren = function() {
};
