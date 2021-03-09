function arrayInConsole() {
  let userArray = [0,2];

  userArray.forEach(function (item) {
    console.log(item);
  });

  console.log(userArray.length);
  return;
}
module.exports= arrayInConsole;
