function checkTypeOfValue(checkValue){
  let resultType;
  let typeOfValue = typeof checkValue;
  if (isNaN(checkValue) && (typeOfValue !== "string")){
    resultType = undefined;
    return resultType;
  }
  
  switch (typeOfValue){
    case 'string':
      resultType = "string";
      break;
    case 'number':
      resultType = "number";
      break;
    default:
      resultType = undefined;
  }
  return resultType;
}
module.exports= checkTypeOfValue;