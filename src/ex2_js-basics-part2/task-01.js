function checkTypeOfValue(checkValue) {
  let typeOfValue = typeof checkValue;

  switch (typeOfValue) {
    case 'string':
      return "string";
    case 'number':

      if (isNaN(checkValue)) {
        return undefined;
      }
      
      return "number";
    default:
      return undefined;
  }
}
module.exports = checkTypeOfValue;