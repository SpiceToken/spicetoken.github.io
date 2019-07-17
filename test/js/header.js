$(document).ready(function(){ 
  $.get("./header.html", function(data) {
    $("#headernav").html(data);
  });
});