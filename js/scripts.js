
function roboLooper(number){
  var numberArray=[];
  var toTextArray=[];
  for (var i=0;i<=number;i++){
    numberArray.push(i.toString())
  }
  numberArray.forEach(function(number){
    if(number.includes("3")){
      toTextArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if(number.includes("2")){
      toTextArray.push("Boop");
    } else if(number.includes("1")){
      toTextArray.push("Beep");
    } else {
      toTextArray.push(number);
    }


  })
console.log(toTextArray);
}

roboLooper(33);


$(document).ready(function(){
});
