/**
 * SuiteScript Cache APIs
 */


/**
 * Get a cache object
 *
 * @param {string} name of the cache
 *
 * @return {nlobjCache}
 * @since 2013.2
 */
function nlapiGetCache(name) {
}

/**
 * @constructor
 * @since 2013.1
 */
function nlobjCache() {
}

/**
 * @param {string} key
 * @param {string} value
 * @param {int} ttl time to live in seconds
 * @return {Object} status
 * @since 2013.2
 */
nlobjCache.prototype.put = function(key, value, ttl) {
};

/**
 * @param {string} key
 * @return {string} value associate with that key
 * @since 2013.2
 */
nlobjCache.prototype.get = function(key) {
};

/**
 * @param {string} key
 * @return {Object} status
 * @since 2013.2
 */
nlobjCache.prototype.remove = function(key) {
};
