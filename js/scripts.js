
function roboLooper(number){
  var numberArray=[];
  var toTextArray=[];
  for (var i=1;i<=number;i++){
    numberArray.push(i.toString())
  }
  numberArray.forEach(function(number){
    if(number.includes("3")){
      toTextArray.push("Sorry Dave");
    }


  })
console.log(toTextArray);
}

roboLooper(33);


$(document).ready(function(){
});
