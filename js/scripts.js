
function roboLooper(number){
  var numberArray=[];
  for (var i=1;i<=number;i++){
    numberArray.push(i.toString())
  }
  numberArray.forEach(function(number){
    for (var j=0;j<number.length;j++){
      console.log(number[j]);
      if (number[j]==="3"){
        number = "Sorry Dave";
      }
    }
  });
  console.log(numberArray);
}

roboLooper(10);


$(document).ready(function(){
});
