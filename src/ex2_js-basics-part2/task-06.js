function checkSimpleNumber(userValue){
    let result;
    let numberResult = 0;
    if (userValue > 1000){
      result ="Данные неверны";
      console.log(result);
      return result;
    }
    if ((userValue === 1)||(userValue === 0)){
      result ="Число " + userValue + " - ни простое, ни составное";
      console.log(result);
      return result;
    }
    for(let i = 2; i <= userValue; i++){
      if(userValue % i === 0){
        numberResult += 1;
      }
    }
    console.log(numberResult);
    if (numberResult !== 1){
       result = "Число " + userValue + " - составное число";
    }else{
       result = "Число " + userValue + " - простое число";
    }
    console.log(result);
    return result;
}
module.exports= checkSimpleNumber;