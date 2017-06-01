$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var hobby = parseInt($("#hobby").val());
    var place = $("#place").val();
    var celeb = "";
    var name  = $("#name").val();

    if (hobby === 1 && place === 'A') {
      celeb = "Nicki Minaj";

    }
    else if (hobby === 2 && place === 'A') {
      celeb = "Eminem"
    }
    else if (hobby === 1 && place === 'B') {
      celeb = "Beyonce"
    }
    else if (hobby === 2 && place === 'B') {
      celeb = "T-pain"
    }
    $("#foot").show();
    $(".name").text(name);
    $(".total").text(celeb);
    event.preventDefault();
  });
});
