var inputedName= "Dave";

function roboLooper(number){
  var realNumber= parseInt(number);
  var numberArray=[];
  var toTextArray=[];
  if (realNumber>=0){
    for (var i=0;i<=realNumber;i++){
      numberArray.push(i.toString());
    }
  }
  if (realNumber<0){
    for (var i=0;i>=realNumber;i--){
      numberArray.push(i.toString());
    }
  }
  numberArray.forEach(function(number){
    if(number.includes("3")){
      toTextArray.push(`I'm sorry, ${inputedName}. I'm afraid I can't do that.`);
    } else if(number.includes("2")){
      toTextArray.push("Boop");
    } else if(number.includes("1")){
      toTextArray.push("Beep");
    } else {
      toTextArray.push(number);
    }
  })
var outputText = toTextArray.join(",");
return outputText;
}


$(document).ready(function(){
  $("form#userNameForm").submit(function(event){
    event.preventDefault();
    inputedName= $("input#userNameInput").val();
    if(inputedName){
      $(".nameGoesHere").text(inputedName);
      $("form#userNameForm").hide();
      $("form#numberInputForm").show();
    }
  })
  $("form#numberInputForm").submit(function(event){
    $("#printout").hide();
    $("#computerMessages").hide();
    event.preventDefault();
    var numberInput = $("input#numberInput").val();
    if(numberInput){
    var beepBoopOutput = roboLooper(numberInput);
    $(".numberGoesHere").text(numberInput);
    $("#returnOutput").text(beepBoopOutput);
    $("#computerMessages").slideDown(4000);
    $("#printout").delay(4000).slideDown(4000);
    }
  })
});
