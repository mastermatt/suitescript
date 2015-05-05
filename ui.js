/**
 * SuiteScript Record APIs
 *
 * UI builder APIs allow developers to programmatically create various components of a the NetSuite UI
 * (for example, forms, fields, sublists, tabs, portlets). You can also use the UI builder APIs
 * to create NetSuite-looking assistant wizards.
 */

/**
 * Return a new assistant page
 *
 * @restriction Suitelets only
 *
 * @param {string} title page title
 * @param {boolean} [hideHeader=false] true to hide the page header
 *
 * @return {nlobjAssistant}
 * @since 2009.2
 */
function nlapiCreateAssistant(title, hideHeader) {
}

/**
 * Return a new entry form page
 *
 * @restriction Suitelets only
 *
 * @param {string} title page title
 * @param {boolean} [hideHeader=false] true to hide the page header
 *
 * @return {nlobjForm}
 * @since 2008.2
 */
function nlapiCreateForm(title, hideHeader) {
}

/**
 * Return a new list page
 *
 * @restriction Suitelets only
 *
 * @param {string} title page title
 * @param {boolean}  [hideHeader=false] true to hide the page header
 *
 * @return {nlobjList}
 * @since 2008.2
 */
function nlapiCreateList(title, hideHeader) {
}

/**
 * UI Object page type used to build multi-step "assistant" pages to simplify complex workflows.
 *  All data and state for an assistant is tracked automatically throughout the user's session
 *  up until completion of the assistant
 *
 * @constructor
 * @since 2009.2
 */
function nlobjAssistant() {
}

/**
 * Set the page title
 *
 * @param {string} title
 * @return {void}
 * @since 2009.2
 */
nlobjAssistant.prototype.setTitle = function(title) {
};

/**
 * Set the script ID for Client Script used for this form
 *
 * @param {string, int} script script ID or internal ID for global client script used to enable Client SuiteScript on page
 *
 * @return {void}
 * @since 2009.2
 */
nlobjAssistant.prototype.setScript = function(script) {
};

/**
 * Set the splash screen used for this page
 *
 * @param {string} title splash portlet title
 * @param {string} text1 splash portlet content (left side)
 * @param {string} [text2] splash portlet content (right side)
 *
 * @return {void}
 * @since 2009.2
 */
nlobjAssistant.prototype.setSplash = function(title, text1, text2) {
};

/**
 * Show/hide shortcut link. Always hidden on external pages
 *
 * @param {boolean} show enable/disable "Add To Shortcut" link on this page
 *
 * @return {void}
 * @since 2009.2
 */
nlobjAssistant.prototype.setShortcut = function(show) {
};

/**
 * Set the values for all the fields on this page
 *
 * @param {Object} values Object of field name/value pairs used to set all fields on page
 *
 * @return {void}
 * @since 2009.2
 */
nlobjAssistant.prototype.setFieldValues = function(values) {
};

/**
 * If ordered, steps are show on left and must be completed sequentially, otherwise steps are shown on top and
 *  can be done in any order
 *
 * @param {boolean} ordered If true (default assistant behavior) then a navigation order through the steps/pages will
 *                          be imposed on the user. Otherwise the user will be allowed to navigate across
 *                          steps/pages in any order they choose
 *
 * @return  {void}
 * @since 2009.2
 */
nlobjAssistant.prototype.setOrdered = function(ordered) {
};

/**
 * If numbered, step numbers are displayed next to the step's label in the navigation area
 *
 * @param {boolean} numbered If true (default assistant behavior) step numbers will be displayed next to the step label
 *
 * @return  {void}
 * @since 2009.2
 */
nlobjAssistant.prototype.setNumbered = function(numbered) {
};

/**
 * Return true if all the steps have been completed
 *
 * @return {boolean}
 * @since 2009.2
 */
nlobjAssistant.prototype.isFinished = function() {
};

/**
 * Mark assistant page as completed and optionally set the rich text to display on completed page
 *
 * @param {string} html completion message (rich text) to display on the "Finish" page
 *
 * @return  {void}
 * @since 2009.2
 */
nlobjAssistant.prototype.setFinished = function(html) {
};

/**
 * Return true if the assistant has an error message to display for the current step
 *
 * @return {boolean}
 * @since 2009.2
 */
nlobjAssistant.prototype.hasError = function() {
};

/**
 * Set the error message for the current step
 *
 * @param {string} html error message (rich text) to display on the page to the user
 *
 * @return {void}
 * @since 2009.2
 */
nlobjAssistant.prototype.setError = function(html) {
};

/**
 * Mark a step as current. It will be highlighted accordingly when the page is displayed
 *
 * @param {nlobjAssistantStep} step assistant step object representing the current step that the user is on
 *
 * @return {void}
 * @since 2009.2
 */
nlobjAssistant.prototype.setCurrentStep = function(step) {
};

/**
 * Add a step to the assistant
 *
 * @param {string} name the name of the step
 * @param {string} label label used for this step
 *
 * @return {nlobjAssistantStep}
 * @since 2009.2
 */
nlobjAssistant.prototype.addStep = function(name, label) {
};

/**
 * Add a field to this page and return it
 *
 * @param {string} name field name
 * @param {string} type field type
 * @param {string} [label] field label
 * @param {string, int} [source] script ID or internal ID for source list
 *                          (select and multiselects only) -or- radio value for radio fields
 * @param {string} [group] group name that this field will live on.
 *                          If empty then the field is added to the main section of the page
 *
 * @return {nlobjField}
 * @since 2009.2
 */
nlobjAssistant.prototype.addField = function(name, type, label, source, group) {
};

/**
 * Add a sublist to this page and return it. For now only sublists of type inlineeditor are supported
 *
 * @param {string} name sublist name
 * @param {string} type sublist type (inlineeditor only for now)
 * @param {string} label sublist label
 *
 * @return {nlobjSubList}
 * @since 2009.2
 */
nlobjAssistant.prototype.addSubList = function(name, type, label) {
};

/**
 * Add a field group to the page
 *
 * @param {string} name field group name
 * @param {string} label field group label
 *
 * @return {nlobjFieldGroup}
 * @since 2009.2
 */
nlobjAssistant.prototype.addFieldGroup = function(name, label) {
};

/**
 * Return an assistant step on this page
 *
 * @param {string} name step name
 *
 * @return {nlobjAssistantStep}
 * @since 2009.2
 */
nlobjAssistant.prototype.getStep = function(name) {
};

/**
 * Return a field on this page
 *
 * @param {string} name field name
 *
 * @return {nlobjField}
 * @since 2009.2
 */
nlobjAssistant.prototype.getField = function(name) {
};

/**
 * Return a sublist on this page
 *
 * @param {string} name sublist name
 *
 * @return {nlobjSubList}
 * @since 2009.2
 */
nlobjAssistant.prototype.getSubList = function(name) {
};

/**
 * Return a field group on this page
 *
 * @param {string} name field group name
 *
 * @return {nlobjFieldGroup}
 * @since 2009.2
 */
nlobjAssistant.prototype.getFieldGroup = function(name) {
};

/**
 * Return an array of all the assistant steps for this assistant
 *
 * @return {nlobjAssistantStep[]}
 * @since 2009.2
 */
nlobjAssistant.prototype.getAllSteps = function() {
};

/**
 * Return an array of the names of all fields on this page
 *
 * @return {string[]}
 * @since 2009.2
 */
nlobjAssistant.prototype.getAllFields = function() {
};

/**
 * Return an array of the names of all sublists on this page
 *
 * @return {string[]}
 * @since 2009.2
 */
nlobjAssistant.prototype.getAllSubLists = function() {
};

/**
 * Return an array of the names of all field groups on this page
 *
 * @return {string[]}
 * @since 2009.2
 */
nlobjAssistant.prototype.getAllFieldGroups = function() {
};

/**
 * Return the last submitted action by the user: next|back|cancel|finish|jump
 *
 * @return {string}
 * @since 2009.2
 */
nlobjAssistant.prototype.getLastAction = function() {
};

/**
 * Return step from which the last submitted action came from
 *
 * @return {nlobjAssistantStep}
 * @since 2009.2
 */
nlobjAssistant.prototype.getLastStep = function() {
};

/**
 * Return the next logical step corresponding to the user's last submitted action. You should only call this after
 *  you have successfully captured all the information from the last step and are ready to move on to the next step.
 *  You would use the return value to set the current step prior to continuing.
 *
 * @return {nlobjAssistantStep}
 * @since 2009.2
 */
nlobjAssistant.prototype.getNextStep = function() {
};

/**
 * Return current step set via nlobjAssistant.setCurrentStep(step)
 *
 * @return {nlobjAssistantStep}
 * @since 2009.2
 */
nlobjAssistant.prototype.getCurrentStep = function() {
};

/**
 * Return the total number of steps in the assistant
 *
 * @return {int}
 * @since 2009.2
 */
nlobjAssistant.prototype.getStepCount = function() {
};

/**
 * Redirect the user following a user submit operation.
 *  Use this to automatically redirect the user to the next logical step
 *
 * @param {nlobjResponse} response the response object used to communicate back to the user's client
 *
 * @return {void}
 * @since 2009.2
 */
nlobjAssistant.prototype.sendRedirect = function(response) {
};

/**
 * Primary object used to encapsulate a step within a custom NetSuite assistant.
 * Assistant step definition. Used to define individual steps/pages in multi-step workflows
 *
 * @constructor
 * @since 2009.2
 */
function nlobjAssistantStep() {
}

/**
 * Set the label for this assistant step
 *
 * @param {string} label display label used for this assistant step
 *
 * @return {void}
 * @since 2009.2
 */
nlobjAssistantStep.prototype.setLabel = function(label) {
};

/**
 * Set helper text for this assistant step
 *
 * @param {string} help inline help text to display on assistant page for this step
 *
 * @return {nlobjAssistantStep}
 * @since 2009.2
 */
nlobjAssistantStep.prototype.setHelpText = function(help) {
};

/**
 * Return the index of this step in the assistant page (1-based)
 *
 * @return  {int} the index of this step in the assistant (1-based) based on the order in which the steps were added
 * @since 2009.2
 */
nlobjAssistantStep.prototype.getStepNumber = function() {
};

/**
 * Return the value of a field entered by the user during this step
 *
 * @param {string} name field name
 *
 * @return {string}
 * @since 2009.2
 */
nlobjAssistantStep.prototype.getFieldValue = function(name) {
};

/**
 * Return the selected values of a multi-select field as an Array entered by the user during this step
 *
 * @param {string} name multi-select field name
 *
 * @return {string[]}
 * @since 2009.2
 */
nlobjAssistantStep.prototype.getFieldValues = function(name) {
};

/**
 * Return the number of lines previously entered by the user in this step (or -1 if the sublist does not exist)
 *
 * @param {string} group sublist name
 *
 * @return {int}
 * @since 2009.2
 */
nlobjAssistantStep.prototype.getLineItemCount = function(group) {
};

/**
 * Return the value of a sublist field entered by the user during this step
 *
 * @param {string} group sublist name
 * @param {string} name sublist field name
 * @param {int} line sublist (1-based)
 *
 * @return  {string}
 * @since 2009.2
 */
nlobjAssistantStep.prototype.getLineItemValue = function(group, name, line) {
};

/**
 * Return an array of the names of all fields entered by the user during this step
 *
 * @return {string[]}
 * @since 2009.2
 */
nlobjAssistantStep.prototype.getAllFields = function() {
};

/**
 * Return an array of the names of all sublists entered by the user during this step
 *
 * @return {string[]}
 * @since 2009.2
 */
nlobjAssistantStep.prototype.getAllLineItems = function() {
};

/**
 * Return an array of the names of all sublist fields entered by the user during this step
 *
 * @param {string} group sublist name
 *
 * @return {string[]}
 * @since 2009.2
 */
nlobjAssistantStep.prototype.getAllLineItemFields = function(group) {
};

/**
 * Primary object used to encapsulate custom buttons
 *
 * Note that custom buttons only appear in the UI when the record is in Edit mode.
 * Custom buttons do not appear in View mode. Also note that in SuiteScript, buttons are typically
 *  added to a record or form in beforeLoad user event scripts.
 *
 * If you add a custom button to a record, it will appear before the printer icon.
 *
 * Note: Currently you cannot use SuiteScript to add or remove a custom button to or from the More Actions menu.
 * You can, however, do this using SuiteBuilder point-and- click customization.
 *
 * @constructor
 * @since 2009.2
 */
function nlobjButton() {
}

/**
 * Set the label for this button
 *
 * @param {string} label display label for button
 *
 * @return {nlobjButton}
 * @since 2008.2
 */
nlobjButton.prototype.setLabel = function(label) {
};

/**
 * Disable or enable button
 *
 * @param {boolean} disabled if true then this button should be disabled on the page
 *
 * @return {nlobjButton}
 * @since 2008.2
 */
nlobjButton.prototype.setDisabled = function(disabled) {
};

/**
 * Sets the button as hidden in the UI. This API is supported on custom buttons and on some standard NetSuite buttons
 *
 * @param {boolean} [visible=true]
 *
 * @return {nlobjButton}
 * @since 2010.2
 */
nlobjButton.prototype.setVisible = function(visible) {
};

/**
 * Primary object used to encapsulate list columns
 *
 * To add a column, you must first create a custom list using nlapiCreateList(title, hideNavbar),
 *  which returns an nlobjList object.
 * Once the list object is instantiated, you can add a standard column using the
 *  nlobjList.addColumn(name, type, label, align) method.
 *
 * You can also add an "Edit | View" column using the nlobjList.addEditColumn(column, showView, showHrefCol) method.
 * Both methods return an nlobjColumn object.
 *
 * @constructor
 */
function nlobjColumn() {
}

/**
 * Set the header name for this column
 *
 * @param {string} label the label for this column
 *
 * @return {void}
 * @since 2008.2
 */
nlobjColumn.prototype.setLabel = function(label) {
};

/**
 * Set the base URL (optionally defined per row) for this column
 *
 * @param {string} value the base URL or a column in the datasource that returns the base URL for each row
 * @param {boolean} [dynamic]  If true, then the URL is actually an alias that is calculated per row
 *
 * @return {void}
 * @since 2008.2
 */
nlobjColumn.prototype.setURL = function(value, dynamic) {
};

/**
 * Add a URL parameter (optionally defined per row) to this column's URL
 *
 * @param {string} param the name of a parameter to add to URL
 * @param {string} value the value of the parameter to add to URL -or- a column in the datasource
 *          that returns the parameter value for each row
 * @param {boolean} [dynamic] if true then the 2nd arg is expected to be a column in the datasource
 *
 * @return {void}
 * @since 2008.2
 */
nlobjColumn.prototype.addParamToURL = function(param, value, dynamic) {
};

/**
 * Object used for grouping fields on pages (currently only supported on assistant pages)
 *
 * Primary object used to encapsulate a field group on a custom NetSuite assistant page and on nlobjForm objects.
 *
 * You can create an assistant by calling nlapiCreateAssistant(title, hideHeader), which returns a reference to the
 *  nlobjAssistant object. On the assistant object, call addFieldGroup to instantiate a new nlobjFieldGroup object.
 *
 * @constructor
 * @since 2009.2
 */
function nlobjFieldGroup() {
}

/**
 * Set the label for this field group
 *
 * @param {string} label display label for field group
 *
 * @return {nlobjFieldGroup}
 * @since 2009.2
 */
nlobjFieldGroup.prototype.setLabel = function(label) {
};

/**
 * Set collapsibility property for this field group
 *
 * @param {boolean} collapsible if true then this field group is collapsible
 * @param {boolean} [defaultCollapsed] if true and the field group is collapsible, collapse this field group by default
 *
 * @return {nlobjFieldGroup}
 * @since 2009.2
 */
nlobjFieldGroup.prototype.setCollapsible = function(collapsible, defaultCollapsed) {
};

/**
 * Set singleColumn property for this field group
 *
 * @param {boolean} singleColumn if true then this field group is displayed in single column
 *
 * @return {nlobjFieldGroup}
 * @since 2011.1
 */
nlobjFieldGroup.prototype.setSingleColumn = function(singleColumn) {
};

/**
 * Set showBorder property for this field group
 *
 * @param {boolean} showBorder if true then this field group shows border including label of group
 *
 * @return {nlobjFieldGroup}
 * @since 2011.1
 */
nlobjFieldGroup.prototype.setShowBorder = function(showBorder) {
};

/**
 * UI Object page type used for building basic data entry forms
 * Return a new instance of nlobjForm used for scriptable form page
 *
 * @constructor
 */
function nlobjForm() {
}

/**
 * Set the page title
 *
 * @param {string} title
 * @since 2008.2
 */
nlobjForm.prototype.setTitle = function(title) {
};

/**
 * Set additional title Html. INTERNAL ONLY
 *
 * @param {string} html
 * @since 2008.2
 */
nlobjForm.prototype.addTitleHtml = function(html) {
};

/**
 * Set the Client Script definition used for this page
 *
 * @param {string, int} script script ID or internal ID for global client script used to enable Client SuiteScript on page
 * @since 2008.2
 */
nlobjForm.prototype.setScript = function(script) {
};

/**
 * Set the values for all the fields on this form
 *
 * @param {Object} values Object containing field name/value pairs
 * @since 2008.2
 */
nlobjForm.prototype.setFieldValues = function(values) {
};

/**
 * Add a navigation cross-link to the page
 *
 * @param {string} type    page link type: crosslink|breadcrumb
 * @param {string} title page link title
 * @param {string} url URL for page link
 * @since 2008.2
 */
nlobjForm.prototype.addPageLink = function(type, title, url) {
};

/**
 * Add a button to this form
 *
 * @param {string} name button name
 * @param {string} label button label
 * @param {string} script button script (function name)
 * @return {nlobjButton}
 * @since 2008.2
 */
nlobjForm.prototype.addButton = function(name, label, script) {
};

/**
 * Get a button from this form by name
 * @param {string} name
 * @return {nlobjButton}
 * @since 2009.2
 */
nlobjForm.prototype.getButton = function(name) {
};

/**
 * Removes an nlobjButton object. This method can be used on custom buttons and certain built- in NetSuite buttons
 *
 * @param {string} name
 *
 * @return {void}
 * @since 2008.2
 */
nlobjForm.prototype.removeButton = function(name) {
};

/**
 * Add a reset button to this form
 *
 * @param {string} [label='Reset'] label for this button
 * @return {nlobjButton}
 * @since 2008.2
 */
nlobjForm.prototype.addResetButton = function(label) {
};

/**
 * Add a submit button to this form
 *
 * @param {string} [label='Save'] label for this submit button
 * @return {nlobjButton}
 * @since 2008.2
 */
nlobjForm.prototype.addSubmitButton = function(label) {
};

/**
 * Add a tab (nlobjTab) to this form and return it
 *
 * @param {string} name tab name
 * @param {string} label tab label
 * @return {nlobjTab}
 * @since 2008.2
 */
nlobjForm.prototype.addTab = function(name, label) {
};

/**
 * Add a field (nlobjField) to this form and return it
 *
 * @param {string} name field name
 * @param {string} type field type
 * @param {string} [label] field label
 * @param {string, int} [sourceOrRadio] script ID or internal ID for source list (select and multiselects only)
 *          -or- radio value for radio fields
 * @param {string} [tab] tab name that this field will live on. If empty then the field is added to the main section
 *          of the form (immediately below the title bar)
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjForm.prototype.addField = function(name, type, label, sourceOrRadio, tab) {
};

/**
 * Adds a field that lets you store credentials in NetSuite to be used when invoking services
 *   provided by third parties. For example, merchants need to store credentials in NetSuite used to
 *   communicate with Payment Gateway providers when executing credit card transactions
 *   This method is supported in client and server scripts
 *
 * @param {string} name The internal ID of the credential fiel
 * @param {string} label The UI label for the credential field
 * @param {string} [domain] The domain the credentials can be sent to. For example, 'www.mysite.com'
 * @param {string} [scriptId] The scriptId of the script that is allowed to use this credential field.
 *          For example, 'customscript_my_script'
 * @param {string} [value] - If you choose, you can set an initial value for this field.
 *          This value is the handle to the credentials
 * @param {boolean} [entityMatch] Controls whether use of
 *   nlapiRequestUrlWithCredentials with this credential is restricted to the same entity
 *   that originally entered the credential. An example where you would not want this (you
 *   would set to false) is with a credit card processor, where the credential represents the
 *   company an employee is working for and multiple entities will be expected to make
 *   secure calls out to the processor (clerks, for example). An example where you might
 *   want to set entityMatch to true is when each user of the remote call has his or her own
 *   credentials
 * @param {string} [tab] The tab parameter can be used to specify either a tab or a field
 *   group (if you have added nlobjFieldGroup objects to your form). If tab is empty, then
 *   the field is added to the "main" section of the form
 *
 *   @return {nlobjField}
 *   @since 2012.1
 */
nlobjForm.prototype.addCredentialField = function(name, label, domain, scriptId, value, entityMatch, tab) {
};

/**
 * Add a subtab (nlobjTab) to this form and return it
 *
 * @param {string} name subtab name
 * @param {string} label subtab label
 * @param {string} [tab] parent tab that this subtab lives on. If empty, it is added to the main tab
 * @return {nlobjTab}
 * @since 2008.2
 */
nlobjForm.prototype.addSubTab = function(name, label, tab) {
};

/**
 * Add a sublist (nlobjSubList) to this form and return it
 *
 * @param {string} name sublist name
 * @param {string} type sublist type: inlineeditor|editor|list|staticlist
 * @param {string} label sublist label
 * @param {string} [tab] parent tab that this sublist lives on. If empty, it is added to the main tab
 * @return {nlobjSubList}
 * @since 2008.2
 */
nlobjForm.prototype.addSubList = function(name, type, label, tab) {
};

/**
 * Insert a tab (nlobjTab) before another tab (name)
 *
 * @param {nlobjTab} tab the tab object to insert
 * @param {string} nexttab the name of the tab before which to insert this tab
 * @return {nlobjTab}
 * @since 2008.2
 */
nlobjForm.prototype.insertTab = function(tab, nexttab) {
};

/**
 * Insert a field (nlobjField) before another field (name)
 *
 * @param {nlobjField} field the field object to insert
 * @param {string} nextField the name of the field before which to insert this field
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjForm.prototype.insertField = function(field, nextField) {
};

/**
 * Insert a subtab (nlobjTab) before another subtab or sublist (name)
 *
 * @param {nlobjTab} subtab the subtab object to insert
 * @param {string} nextSubtab the name of the subtab before which to insert this subtab
 * @return {nlobjTab}
 * @since 2008.2
 */
nlobjForm.prototype.insertSubTab = function(subtab, nextSubtab) {
};

/**
 * Insert a sublist (nlobjSubList) before another subtab or sublist (name)
 *
 * @param {nlobjSubList} sublist the sublist object to insert
 * @param {string} nextSublist the name of the sublist before which to insert this sublist
 * @return {nlobjSubList}
 * @since 2008.2
 */
nlobjForm.prototype.insertSubList = function(sublist, nextSublist) {
};

/**
 * Return a tab (nlobjTab) on this form
 *
 * @param {string} name tab name
 *
 * @return {nlobjTab}
 * @since 2008.2
 */
nlobjForm.prototype.getTab = function(name) {
};

/**
 * Return a field (nlobjField) on this form
 *
 * @param {string} name field name
 * @param {string} [radio] if this is a radio field, specify which radio field to return based on radio value
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjForm.prototype.getField = function(name, radio) {
};

/**
 * Return a subtab (nlobjTab) on this form
 *
 * @param {string} name subtab name
 * @return {nlobjTab}
 * @since 2008.2
 */
nlobjForm.prototype.getSubTab = function(name) {
};

/**
 * Return a sublist (nlobjSubList) on this form
 *
 * @param {string} name sublist name
 * @return {nlobjSubList}
 * @since 2008.2
 */
nlobjForm.prototype.getSubList = function(name) {
};

/**
 * Add a field group to the form
 *
 * @param {string} name field group name
 * @param {string} label field group label
 * @param {string} tab Specify the tab you the field group to appear on
 *      If no tab is specified, the field group is placed on the "main" area of the form
 *
 * @return {nlobjFieldGroup}
 * @since 2011.1
 */
nlobjForm.prototype.addFieldGroup = function(name, label, tab) {
};

/**
 * Get a list of all tabs
 *
 * @return {string[]} An array with names of all tabs
 * @since 2012.2
 */
nlobjForm.prototype.getTabs = function() {
};

/**
 * UI Object page type used for building lists
 * Return a new instance of nlobjList used for scriptable list page
 *
 * @constructor
 */
function nlobjList() {
}

/**
 * Set the page title
 *
 * @param {string} title
 * @since 2008.2
 */
nlobjList.prototype.setTitle = function(title) {
};

/**
 * Set the global style for this list: grid|report|plain|normal
 *
 * @param {string} style overall style used to render list
 * @since 2008.2
 */
nlobjList.prototype.setStyle = function(style) {
};

/**
 * Set the Client SuiteScript used for this page
 *
 * @param {string, int} script script ID or internal ID for global client script used to enable Client SuiteScript on page
 * @since 2008.2
 */
nlobjList.prototype.setScript = function(script) {
};

/**
 * Add a column (nlobjColumn) to this list and return it
 *
 * @param {string} name column name
 * @param {string} type column type
 * @param {string} label column label
 * @param {string} [align] column alignment
 * @return {nlobjColumn}
 * @since 2008.2
 */
nlobjList.prototype.addColumn = function(name, type, label, align) {
};

/**
 * Add an Edit column (nlobjColumn) to the left of the column specified
 *
 * @param {nlobjColumn} column
 * @param {boolean} showView should Edit|View instead of Edit link
 * @param {string} [showHref] column that evaluates to T or F that determines whether to disable the
 *              edit|view link per-row
 *
 * @return {nlobjColumn}
 * @since 2008.2
 */
nlobjList.prototype.addEditColumn = function(column, showView, showHref) {
};

/**
 * Add a row (Array of name-value pairs or nlobjSearchResult) to this portlet
 *
 * @param {string[], nlobjSearchResult} row data used to add a single row
 * @since 2008.2
 */
nlobjList.prototype.addRow = function(row) {
};

/**
 * Add multiple rows (Array of nlobjSearchResults or name-value pair Arrays) to this portlet
 *
 * @param {string[][], nlobjSearchResult[]} rows data used to add multiple rows
 * @since 2008.2
 */
nlobjList.prototype.addRows = function(rows) {
};

/**
 * Add a button (nlobjButton) to the footer of this page
 *
 * @param {string} name button name
 * @param {string} label button label
 * @param {string} script button script (function name)
 * @since 2008.2
 */
nlobjList.prototype.addButton = function(name, label, script) {
};

/**
 * Add a navigation cross-link to the page
 *
 * @param {string} type    page link type: crosslink|breadcrumb
 * @param {string} title page link title
 * @param {string} url URL for page link
 * @since 2008.2
 */
nlobjList.prototype.addPageLink = function(type, title, url) {
};

/**
 * UI Object used for building portlets that are displayed on dashboard pages
 * Return a new instance of nlobjPortlet used for scriptable dashboard portlet
 *
 * @constructor
 */
function nlobjPortlet() {
}

/**
 * Set the portlet title
 *
 * @param {string} title
 * @since 2008.2
 */
nlobjPortlet.prototype.setTitle = function(title) {
};

/**
 * Set the entire contents of the HTML portlet (will be placed inside a <TD>...</TD>)
 *
 * @param {string} html
 * @since 2008.2
 */
nlobjPortlet.prototype.setHtml = function(html) {
};

/**
 * Add a column (nlobjColumn) to this LIST portlet and return it
 *
 * @param {string} name    column name
 * @param {string} type column type
 * @param {string} label column label
 * @param {string} [align] column alignment
 * @since 2008.2
 */
nlobjPortlet.prototype.addColumn = function(name, type, label, align) {
};

/**
 * Add an Edit column (nlobjColumn) to the left of the column specified (supported on LIST portlets only)
 *
 * @param {nlobjColumn} column
 * @param {boolean} showView should Edit|View instead of Edit link
 * @param {string} [showHref] column that evaluates to T or F that determines whether to disable
 *              the edit|view link per-row
 *
 * @return {nlobjColumn}
 * @since 2008.2
 */
nlobjPortlet.prototype.addEditColumn = function(column, showView, showHref) {
};

/**
 * Add a row (nlobjSearchResult or Array of name-value pairs) to this LIST portlet
 *
 * @param {string[]|nlobjSearchResult} row
 * @since 2008.2
 */
nlobjPortlet.prototype.addRow = function(row) {
};

/**
 * Add multiple rows (Array of nlobjSearchResults or name-value pair Arrays) to this LIST portlet
 *
 * @param {string[][]|nlobjSearchResult[]} rows
 * @since 2008.2
 */
nlobjPortlet.prototype.addRows = function(rows) {
};

/**
 * Add a field (nlobjField) to this FORM portlet and return it
 *
 * @param {string} name field name
 * @param {string} type field type
 * @param {string} [label] field label
 * @param {string, int} [source] script ID or internal ID for source list (select and multiselects only)
 *              -or- radio value for radio fields
 * @return {nlobjField}
 * @since 2008.2
 */
nlobjPortlet.prototype.addField = function(name, type, label, source) {
};

/**
 * Add a FORM submit button to this FORM portlet
 *
 * @param {string} url    URL that this form portlet will POST to
 * @param {string} [label=Save] label for submit button
 * @since 2008.2
 */
nlobjPortlet.prototype.setSubmitButton = function(url, label) {
};

/**
 * Add a line (containing text or simple HTML) with optional indenting and URL to this LINKS portlet
 *
 * @param {string} text data to output to line
 * @param {string} [url] URL if this line should be clickable (if NULL then line will not be clickable)
 * @param {int} indent # of indents to insert before text
 * @since 2008.2
 */
nlobjPortlet.prototype.addLine = function(text, url, indent) {
};

/**
 * Sets the regular interval when a FORM portlet automatically refreshes itself.
 *
 * This API is only available if the portlet type is FORM.
 *
 * @param {int} seconds Number of seconds. In production mode, this value must be at least 60 seconds.
 *          An error is raised if this value is less than zero, and in production if it is less than 60.
 *
 * @return {void}
 * @since 2011.1
 */
nlobjPortlet.prototype.setRefreshInterval = function(seconds) {
};

/**
 * Sets the client-side script for a FORM portlet.
 * For example, you can use this method to call a script to implement client-side validation,
 *  dynamically calculate field totals, and change data based on the value of another field.
 *
 * Note that you can only set one script. Setting another script implicitly removes the previous script.
 *
 * This API is only available if the portlet type is FORM.
 *
 * @param {int} scriptID The script internalId or custom scriptId of a record- level client script.
 *                  Scripts of this type are deployed globally and run against an entire record type.
 *
 * @return {void}
 * @since 2011.1
 */
nlobjPortlet.prototype.setScript = function(scriptID) {
};

/**
 * Primary object used to encapsulate tabs and sub-tabs.
 * Note that to add a tab or subtab, you must first create a custom form using nlapiCreateForm(title, hideNavbar),
 *  which returns an nlobjForm object.
 *
 * Once the form object is instantiated, you can add a new tab or subtab to the form using the
 *  nlobjForm.addTab(name, label) or nlobjForm.addSubTab(name, label, tab) methods,
 *  which both return a reference to nlobjTab.
 *
 * @constructor
 */
function nlobjTab() {
}

/**
 * Set the label for this tab or subtab
 *
 * @param {string} label string used as label for this tab or subtab
 *
 * @return {nlobjTab}
 * @since 2008.2
 */
nlobjTab.prototype.setLabel = function(label) {
};

/**
 * Set helper text for this tab or subtab
 *
 * @param {string} help inline help text used for this tab or subtab
 *
 * @return {nlobjTab}
 * @since 2008.2
 */
nlobjTab.prototype.setHelpText = function(help) {
};
