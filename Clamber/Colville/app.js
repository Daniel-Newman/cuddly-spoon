$(function(){
var newb=function(){
  $('body').append('<div class="new_thing" style="font-size:500px;">Hello</div>');}
$('.row1').append('<div id="d1"><div id="new"><div>+</div></div></div>');
$('#d1').on('click', newb);

});
