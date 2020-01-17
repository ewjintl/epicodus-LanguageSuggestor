$(document).ready(function() {
  $('form#questions').submit(function(event) {
    var os = $("select#os").val();
    var side = $("select#class").val();
    var application = $("select#application").val();
    var experience = $("select#experience").val();
    var stack = $("select#stack").val();
    // console.log(os + side + application + experience + stack);



  
  event.preventDefault();
  });
});