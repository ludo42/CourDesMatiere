$('#go').click(function(){
  let verif=$('#verif').val();
  if (verif.toLowerCase()==="vert" || verif.toLowerCase()==="vert "){
    $('#verif').append();
    $('#verif').val('');
    $('#video').css("display","block");
    console.log("ok");
  }
  else{

    $('#valid').append("<div>Le code que vous avez tapez n'est pas correct</div>");
    $('#verif').val('');

  }
});

//$('#herbe').change(function() {

//let verifi=$('#herbe').val();
//if (verifi.toLowerCase()==="herbe" || verifi.toLowerCase()==="herbe "){
//  $('#herbe').append();
//  $('#herbe').val('');
//}
//else{
//  alert("faux");

//}
//});

$("#herbe").append();
$('#herbe').val('');

$("#couleur").append();
$('#couleur').val('');

$("#saint-etienne").append();
$('#saint-etienne').val('');

$("#football").append();
$('#football').val('');
