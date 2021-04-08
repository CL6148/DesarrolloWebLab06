$(document).ready(function(){
  $(".agregar").click(function(){
    var txt = $("#newText").val();
    $(".Lista").append("<div class='lis'><li><p class='itemShop'>" + txt + "</p><button class='checar'>check</button><button class='del'>delete</button></li></div>"
    );
  });

  $(".checar").click(function() {
    $(this).parent().toggleClass("chec");
  });

  $(".del").click(function() {
    $(this).parent().parent().remove();
  });
});
