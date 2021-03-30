function likeSlice (array, begin = 0, end = array.length) {
  let newArray = [];
  let startPosition;
  let endPosition;
  array.forEach( (item, index) => {
    startPosition = (begin < 0) ? array.length + begin : begin;
    endPosition = (end < 0) ? array.length + end : end;
    if ((index >= startPosition) && (index < endPosition)) {
      newArray.push(item);
    }
  });
  return newArray;
}
module.exports = likeSlice;