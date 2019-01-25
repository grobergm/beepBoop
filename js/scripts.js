
function roboLooper(number){
  var numberArray=[];
  var toTextArray=[];
  for (var i=1;i<=number;i++){
    numberArray.push(i.toString())
  }
  numberArray.forEach(function(number){
    for (var j=0;j<number.length;j++){
      if (number[j]==="3"){
        number = "Sorry Dave";
      }
    }
    toTextArray.push(number);
    console.log(toTextArray);
  })

}

roboLooper(33);


$(document).ready(function(){
});
