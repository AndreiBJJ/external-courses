function arrayInConsole (userArray) {
  let countMod0 = 0;
  let countModNot0 = 0;
  let count0 = 0;
    
  userArray.forEach(function (item) {
  let typeOfElementArr = typeof item;

  if ((typeOfElementArr !== "number") || ( isNaN(item))) {
    return;
  }

  if (item === 0) {
    count0 += 1;
    return;
  }

  if (item % 2 === 0) {
    countMod0 += 1;
  }
    
  if (item % 2 !== 0) {
    countModNot0 += 1;
  }

  });

  let newUserArray = [countMod0,countModNot0,count0];
  console.log(newUserArray);
  return newUserArray;
}
module.exports= arrayInConsole;