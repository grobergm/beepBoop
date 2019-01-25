
function roboLooper(number){
  var realNumber= parseInt(number);
  var numberArray=[];
  var toTextArray=[];
  for (var i=0;i<=realNumber;i++){
    numberArray.push(i.toString());
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
return toTextArray;
}

console.log(roboLooper("15"));


$(document).ready(function(){
  $("form#numberInputForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#numberInput").val();
    console.log(userInput);
  })
});
