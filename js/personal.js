
$( document ).on( "mousemove", function( event ) {
	var top = event.pageY - 1000;
	var left = event.pageX - 1000;
	var top1 = event.pageY - 5;
	var left1 = event.pageX - 25;
	$('#candle-light').animate({ 'top': top + 'px', 'left': left + 'px'},0);
	$('#curser').animate({ 'top':  top1 + 'px', 'left': left1 + 'px'},0);	
	
});
var hateu = "";
hateu += String.fromCharCode(67);
console.log(hateu);