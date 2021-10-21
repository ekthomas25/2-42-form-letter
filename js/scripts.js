$(document).ready(function() {
    $("#letterOne").submit(function(event) {
      event.preventDefault();
      const person1Input = $("input#person1").val();
    
      $(".person1").text(person1Input);
    
      $("#story").show();
    });
  });