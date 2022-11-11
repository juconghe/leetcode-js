/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
 var encode = function(strs) {
   const encoded = strs.join(String.fromCharCode(257));
   return encoded;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
   const decoded = s.split(String.fromCharCode(257));
   return decoded;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

 const dummy_input = ["Hello","World"]
 decode(encode(dummy_input));