const arrayCopy = require('./index');

test('it copies content from one array into another', () => {
  const copyFrom = 'decaffeinated'.split('');

  /** @type {Array.<String>} */
  let copyTo = new Array(7);

  arrayCopy(copyFrom, 2, copyTo, 0, 7);

  expect(copyTo.join('')).toBe('caffein');
});
