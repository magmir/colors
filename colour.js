$(document).ready(function(){
$('button').on('click', function () {
var color=$(this).attr('data-color');
$('#page').css("background-color",color);
localStorage.setItem('#page', color);
});
var storedColor=localStorage.getItem('#page');
if(storedColor) {
$('#page').css("background-color", storedColor);
} else {
$('#page').css("background-color", 'white')
}
});



