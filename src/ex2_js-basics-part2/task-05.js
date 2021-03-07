function maxValueInArray(arr){
    arr.sort();
    let maxValue = arr.length-1;
    console.log(arr[maxValue]);
    return arr[maxValue];
}
module.exports= maxValueInArray;