function arrayInConsole(){
  let userArray = [0,2];
  userArray.forEach(function(item, i, array){
    console.log(item);
  });
  console.log(userArray.length);
  return;
}
module.exports= arrayInConsole;
