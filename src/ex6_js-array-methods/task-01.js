function likeSlice (array, begin = 0, end = array.length) {
  let newArray = [];
  let startPosition = (begin < 0) ? array.length + begin : begin;
  let endPosition = (end < 0) ? array.length + end : end;
  array.forEach( (item, index) => {
    if ((index >= startPosition) && (index < endPosition)) {
      newArray.push(item);
    }
  });
  return newArray;
}
module.exports = likeSlice;