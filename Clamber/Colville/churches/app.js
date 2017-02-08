$(function(){


var newitemnum;
var newitemchar;
var newitem;
var newbox;
var newboxitem;

var newb = function(){
  $('#'+newitem).replaceWith('<div id = "newform"><form action="info.php" method ="POST" enctype="multipart/form-data">Church: <input type="text" placeholder="CHURCH NAME" name="church_name"></br>Location:<input type="text" placeholder="CURCH Location" name="location"><br/>Service Times:<input type="choose" name="times"><input type="submit"></form></div>');

};

var newfirst = function(){
  var row1childn = $('.row1').children().length;
  var row2childn = $('.row2').children().length;
  var row3childn = $('.row3').children().length;

  switch (row3childn) {
    case 0:
  newitemchar = 'a';
    break;
    case 1:
    newitemchar = 'b';
    break;
    case 2:
    newitemchar = 'c';
    break;
    case 3:
    newitemchar = 'd';
    break;
    case 4:
    newitemchar = 'e';
    break;
    case 5:
   newitemchar = 'f';
    break;
    case 6:
    newitemchar = 'g';

                  break;
    default:
}
if(row3childn < row2childn){
newitemnum =  3;
newitem = newitemchar+newitemnum;
$('.row3').append('<div id = "'+newitem +'"><div id="new"><div>+</div></div></div>');
}
else if (row2childn < row1childn){
newitemnum =2;
newitem = newitemchar+newitemnum;
$('.row2').append('<div id = "' + newitem +'"><div id="new"><div>+</div></div></div>');
}
else{
newitemnum = 1;
newitem = newitemchar+newitemnum;
$('.row1').append('<div id = "'+newitem+'"><div id="new"><div>+</div></div></div>');
}
};



newfirst();
$('#'+newitem).on('click', newb);
alert(newitem);


});
