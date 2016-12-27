/**
 * Encode given string based on given type.
 *
 * @param  {String}
 * @return {String}
 */

var input, encode, decode;

module.exports = {
  encode: function(string, type) {
    input   = new Buffer(string);
    encode  = input.toString(type);

    return encode;
  },

  /**
   * Decode given string based on given type
   *
   * @param  {String}
   * @return {String}
   */
  decode: function(string,type) {
    input   = new Buffer(string, type)
    decode  = input.toString();

    return decode;
  }
};
