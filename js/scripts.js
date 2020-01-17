$(document).ready(function() {
  $('form#questions').submit(function(event) {
    var os = $("select#os").val();
    var side = $("select#side").val();
    var application = $("select#application").val();
    // var experience = $("select#experience").val();
    // var stack = $("select#stack").val();
    // console.log(os + side + application + experience + stack);


      if ((os === "1" && application === "3") || (side === "3" && application === "3")) {
        $("#c").show();
      } else {
        $("#again").show();
      }

    event.preventDefault();
    });
  });