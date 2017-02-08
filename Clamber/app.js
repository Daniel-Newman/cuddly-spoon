$(function(){
var zip = function (){
  $('.wraper').css({"filter": "blur(5px) brightness(35%)"});
  $('.wraper .clam').css({"filter": "blur(5px) brightness(35%)"});
 $('body').append('<div class="locget"><div class="backm"><a href="99114">Colville</a><a href="99202">Spokane</a></div></div>');
 $('.locget').css({
 "position":"absolute",
  "margin":"400px 0 0 0",
  "width":"100%"
     
 });
 $('.locget .backm').css({
 "width":"200px",
  "margin":"0 auto",
   "text-align":"center" ,
  "filter": "drop-shadow(3px 3px 8px #DDD, 8px)",
   "color":"white",
"text-decoration": "none" 
 });
 $('.locget .backm a:link, a:visited').css({
 "width":"180px",
  "padding":"12px 20px",
"margin":"8px",
      "color":"white",
   "text-decoration":"none",
  "background-color":"#347BE6"
 });

 $('.locget .back input[type=submit]:hover').css({
  "background-color":"#1f5bb5"
 });
}
$('#c2').on('click', zip);
});
