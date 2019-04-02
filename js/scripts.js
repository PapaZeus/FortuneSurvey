$(document).ready(function(){
  $("form#fortune-form").submit(function(event){
    event.preventDefault();
    
    var numberResponse = $("input:checkbox[name=number]:checked").length;
    var animalResponse = $("input:checkbox[name=animal]:checked").length;
    var wordResponse = $("input:checkbox[name=word]:checked").length;
    var output = numberResponse + animalResponse + wordResponse
    
    if (output <= 4) {
      $("#die-tomorrow").show();
    } 
    else if (output <= 8) {
      $("#average-life").show();
    }
    else {
      $("#live-forever").show();
    }
  });
});