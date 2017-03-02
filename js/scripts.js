$(document).ready(function(){
  $("form#vowelation").submit(function(event) {
    var stringinput=$("input#vowels").val();
    var inputletters=stringinput.split("");
    console.log(inputletters);
    for(var index=0; index < inputletters.length; index+=1){
        if(inputletters[index]==="a" || inputletters[index]==="e" || inputletters[index]==="i" || inputletters[index]==="o" || inputletters[index]==="u") {
          inputletters[index]="-"
        }
    }
    var string = inputletters.join("");
    console.log(string)
    $(".outputstring").text("your answer is "+string)
    $("#inputwords").toggle();
    $("#outputwords").toggle();
    event.preventDefault();
  });
});
