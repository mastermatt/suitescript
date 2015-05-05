/**
 * SuiteScript File APIs
 *
 * Use these APIs to work with files that currently exist in the NetSuite file cabinet.
 * These APIs can also be used to create files to load into NetSuite or to send as attachments in email.
 *
 *  File Type ID    Name                Extension   Content Type
 *  --------------|-------------------|-----------|----------------------------------
 *  AUTOCAD         AutoCad             .dwg        application/x-autocad
 *  BMPIMAGE        BMP Image           .bmp        image/x-xbitmap
 *  CSV             CSV File            .csv        text/csv
 *  EXCEL           Excel File          .xls        application/vnd.ms-excel
 *  FLASH           Flash Animation     .swf        application/x-shockwave-flash
 *  GIFIMAGE        GIF Image           .gif        image/gif
 *  GZIP            GNU Zip File        .gz         application/x-gzip-compressed
 *  HTMLDOC         HTML File           .htm        text/html
 *  ICON            Icon Image          .ico        image/ico
 *  JAVASCRIPT      JavaScript File     .js         text/javascript
 *  JPGIMAGE        JPEG Image          .jpg        image/jpeg
 *  MESSAGERFC      Message RFC         .eml        message/rfc822
 *  MP3             MP3 Audio           .mp3        audio/mpeg
 *  MPEGMOVIE       MPEG Video          .mpg        video/mpeg
 *  MSPROJECT       Project File        .mpp        application/vnd.ms-project
 *  PDF             PDF File            .pdf        application/pdf
 *  PJPGIMAGE       PJPEG Image         .pjpeg      image/pjpeg
 *  PLAINTEXT       Plain Text File     .txt        text/plain
 *  PNGIMAGE        PNG Image           .png        image/x-png
 *  POSTSCRIPT      PostScript File     .ps         application/postscript
 *  POWERPOINT      PowerPoint File     .ppt        application/vnd.ms-powerpoint
 *  QUICKTIME       QuickTime Video     .mov        video/quicktime
 *  RTF             RTF File            .rtf        application/rtf
 *  SMS             SMS File            .sms        application/sms
 *  STYLESHEET      CSS File            .css        text/css
 *  TIFFIMAGE       TIFF Image          .tiff       image/tiff
 *  VISIO           Visio File          .vsd        application/vnd.visio
 *  WORD            Word File           .doc        application/msword
 *  XMLDOC          XML File            .xml        text/xml
 *  ZIP             Zip File            .zip        application/zip
 */


/**
 * Instantiate a file object (specifying the name, type, and contents which are base-64 encoded for binary types.)
 *
 * Note: There is a 5MB limitation to the size of the document that can be created using this API.
 *
 * @restriction Server SuiteScript only
 *
 * @param {string} name file name
 * @param {string} type file type i.e. plainText, htmlDoc, pdf, word (see documentation for the list of supported file types)
 * @param {string} contents string containing file contents (must be base-64 encoded for binary types)
 *
 * @return {nlobjFile}
 * @since 2009.1
 */
function nlapiCreateFile(name, type, contents) {
}

/**
 * Delete a file from the file cabinet
 * @governance 20 units
 * @restriction Server SuiteScript only
 *
 * @param {int} id The internal ID of file to be deleted
 * @return {int} id The internal ID for the file that was deleted
 * @since 2009.1
 */
function nlapiDeleteFile(id) {
}

/**
 * Load a file from the file cabinet (via its internal ID or path)
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * Note if an ID is passed in that ID is at least 8 characters, it must be cast to a string
 * or an UNEXPECTED_ERROR is thrown. Support Case #: 1947546
 *
 * @param {string, int} id internal ID or relative path to file in the file cabinet (i.e. SuiteScripts/foo.js)
 * @return {nlobjFile}
 * @since 2008.2
 */
function nlapiLoadFile(id) {
}

/**
 * Add/update a file in the file cabinet
 * @governance 20 units
 * @restriction Server SuiteScript only
 *
 * @param {nlobjFile} file a file object to submit
 * @return {int} return internal ID of file
 * @since 2009.1
 */
function nlapiSubmitFile(file) {
}

/**
 * Encapsulation of files (media items) in the file cabinet
 * Return a new instance of nlobjFile used for accessing and manipulating files in the file cabinet
 *
 * @constructor
 * @since 2009.1
 */
function nlobjFile() {
}

/**
 * Return the name of the file
 *
 * @return {string}
 * @since 2009.1
 */
nlobjFile.prototype.getName = function() {
};

/**
 * Sets the name of a file
 *
 * @param {string} name the name of the file
 *
 * @return {void}
 * @since 2009.1
 */
nlobjFile.prototype.setName = function(name) {
};

/**
 * Return the internal ID of the folder that this file is in
 *
 * @return {int}
 * @since 2009.1
 */
nlobjFile.prototype.getFolder = function() {
};

/**
 * Sets the internal ID of the folder that this file is in
 *
 * @param {int} folder
 *
 * @return {void}
 * @since 2009.1
 */
nlobjFile.prototype.setFolder = function(folder) {
};

/**
 * Sets the character encoding for the file
 *
 * @param {string} encoding
 *
 * @return {void}
 * @since 2010.2
 */
nlobjFile.prototype.setEncoding = function(encoding) {
};

/**
 * Return true if the file is "Available without Login"
 *
 * @return {boolean}
 * @since 2009.1
 */
nlobjFile.prototype.isOnline = function() {
};

/**
 * Sets the file's "Available without Login" status
 *
 *
 * @param {boolean} online
 * @return {void}
 * @since 2009.1
 */
nlobjFile.prototype.setIsOnline = function(online) {
};

/**
 * Return true if the file is inactive
 *
 * @return {boolean}
 * @since 2009.1
 */
nlobjFile.prototype.isInactive = function() {
};

/**
 * Sets the file's inactive status
 *
 * @param {boolean} inactive
 * @return {void}
 * @since 2009.1
 */
nlobjFile.prototype.setIsInactive = function(inactive) {
};

/**
 * Return the file description
 *
 * @return {string}
 * @since 2009.1
 */
nlobjFile.prototype.getDescription = function() {
};

/**
 * Sets the file's description
 * @param {string} desc the file description
 *
 * @return {void}
 * @since 2009.1
 */
nlobjFile.prototype.setDescription = function(desc) {
};

/**
 * Return the id of the file (if stored in the FC)
 *
 * @return {int}
 * @since 2009.1
 */
nlobjFile.prototype.getId = function() {
};

/**
 * Return the size of the file in bytes
 *
 * @return {int}
 * @since 2009.1
 */
nlobjFile.prototype.getSize = function() {
};

/**
 * Return the URL of the file (if stored in the FC)
 *
 * @return {string}
 * @since 2009.1
 */
nlobjFile.prototype.getURL = function() {
};

/**
 * Return the type of the file
 *
 * @return {string}
 * @since 2009.1
 */
nlobjFile.prototype.getType = function() {
};

/**
 * Return the value (base64 encoded for binary types) of the file
 *
 * @return {string}
 * @since 2009.1
 */
nlobjFile.prototype.getValue = function() {
};
