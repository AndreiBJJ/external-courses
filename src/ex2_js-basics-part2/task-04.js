function checkValuesOfArray(arr) {
  
  for (let i = 0 ; i < arr.length - 1 ; i++) {

  if (arr[i] === arr[i+1]) {
    continue;
  } else {
    return false;
  }

  }
  return true;
}
module.exports = checkValuesOfArray;