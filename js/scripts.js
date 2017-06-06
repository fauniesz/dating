$(document).ready(function() {
  $("form#info").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var match = 'Justin Timberlake';
    if (gender === 'male' && age >= 30) {
      match = 'George Clooney';
    }
    if (gender === 'female' && age >= 30) {
      match = 'Nicole Kidman';
    }
    if (gender === 'female' && age < 30) {
      match = 'Miley Cyrus';
    }

    $("#result").empty().append(match);
    $("#match").show()

    event.preventDefault();
  });
});
