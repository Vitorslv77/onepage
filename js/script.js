// JavaScript Document

//-------------------------------FIXA MENU---------------------------
var tela = jQuery(window).height();//comando para pegar a altura do navegador do usuário em pixels e armazenar na variável tela

jQuery(window).scroll(function(){
	if(jQuery(this).scrollTop() > tela-60){
		jQuery("nav").addClass("fixamenu")
}else{
	jQuery("nav").removeClass("fixamenu")
}
})

//-------------------------------EFEITO PARALLAX---------------------------
jQuery(function(){
	jQuery("#pag1").click(function(){
		jQuery("html").animate({scrollTop:0}, 1000)
	})
	jQuery("#pag2").click(function(){
		jQuery("html").animate({scrollTop:jQuery("#servicos").offset().top}, 1000)
	})
	jQuery("#pag3").click(function(){
		jQuery("html").animate({scrollTop:jQuery("#portfolio").offset().top}, 1000)
	})
	jQuery("#pag4").click(function(){
		jQuery("html").animate({scrollTop:jQuery("#empresa").offset().top}, 1000)
	})
	jQuery("#pag5").click(function(){
		jQuery("html").animate({scrollTop:jQuery("#equipe").offset().top}, 1000)
	})
	jQuery("#pag6").click(function(){
		jQuery("html").animate({scrollTop:jQuery("#contato").offset().top}, 1000)
	})
})

//-------------------------------HABILIDADES---------------------------
jQuery(window).scroll(function(){
	if(jQuery(this).scrollTop() > 2*tela){
		jQuery(".html").addClass("animahtml")
		jQuery(".css").addClass("animacss")
		jQuery(".jquery").addClass("animajquery")
		jQuery(".front").addClass("animafront")
		jQuery(".photo").addClass("animaphoto")
		jQuery(".ai").addClass("animaai")
	}else{
		jQuery(".html").removeClass("animahtml")
		jQuery(".css").removeClass("animacss")
		jQuery(".jquery").removeClass("animajquery")
		jQuery(".front").removeClass("animafront")
		jQuery(".photo").removeClass("animaphoto")
		jQuery(".ai").removeClass("animaai")
	}
})

//-------------------------------EFEITO PARALLAX---------------------------
jQuery(function(){
	jQuery(".galeria").slick({
		slidesToShow:3,
		autoplay: true,
		dots: true
	})
})









