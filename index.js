/**
 * @param {Array} src the source array
 * @param {Number} srcPos starting position in the source array
 * @param {Array} dest the destination array
 * @param {Number} destPos starting position in the destination data
 * @param {Number} length the number of array elements to be copied
 */
function arrayCopy(src, srcPos, dest, destPos, length) {
  for (let i = 0; i < length; i++) {
    dest[destPos + i] = src[srcPos + i];
  }
}

module.exports = arrayCopy;
