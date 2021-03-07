function arrayInConsole(userArray){
    let countMod0 = 0;
    let countModNot0 = 0;
    let count0 = 0;
    if (userArray.length === 0){
        let newUserArray = [0,0,0];
        console.log(newUserArray);
        return newUserArray;
    }
    userArray.forEach(function(item, i, array){
        let typeOfElementArr = typeof item;
        if ((typeOfElementArr !== "number")||(isNaN(item))){
          return;
        }
        if (item === 0){
          count0 += 1;
          return;
        }
        if (item % 2 === 0){
          countMod0 += 1;
        }
        if (item % 2 !== 0){
          countModNot0 += 1;
        } 
    });
    let newUserArray = [countMod0,countModNot0,count0];
    console.log(newUserArray);
    return newUserArray;
}
module.exports= arrayInConsole;