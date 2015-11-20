$(document).ready(function(){
$('button').on('click', function () {
var color=$(this).attr('data-color');
var background=$('#page').css("background-color",color);
localStorage.setItem('#page', background);
});
});


