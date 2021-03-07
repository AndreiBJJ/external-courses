function arrayInConsole(arr){
    if (arr.length === 0){
        return false;
    }
    let lenthgArr = 1;
    arr.sort();
    for(let i =0 ; i< arr.length; i++){
      if (arr[i] === arr[i+1]){
        lenthgArr +=1;
      }
    }
    let result;
    if (lenthgArr === arr.length){
        result= true;
    }else{
        result= false;
    }  
    console.log(result);
    return result;
}
module.exports= maxValueInArray;