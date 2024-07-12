// JavaScript Document

function mostrar(){
	$(".popup, .news").fadeIn(1000)
}
function ocultar(){
	$(".popup, .news").fadeOut(1000)
}

setTimeout("mostrar()", 2000)
setTimeout("ocultar()", 100000)

$(function(){
	$(".fechar, .popup").click(function(){
		$(".popup, .news").fadeOut(500)
	})
	
})