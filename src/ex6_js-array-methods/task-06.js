function likeReduce (array, callback, initialValue) {
  let previousValue = (initialValue !== undefined) ? initialValue : array[0];
  let i = (initialValue !== undefined) ? 0 : 1;
  for (i ; i < array.length; i++) {
    previousValue = callback(previousValue, array[i], i, array);
  }
  return previousValue;
}
module.exports = likeReduce;