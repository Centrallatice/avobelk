$(document).ready(function(){
    gestionTB();
    $('.by3First').matchHeight();
    $('.actus').matchHeight({byRow: true});
    $('.fromleftimmediat').each( function(i){
        $(this).addClass('animated fadeInLeft');
		setTimeout(function(){ $(this).removeClass('fromleftimmediat fadeInLeft')},2000);
    }); 
	$('.fromrightimmediat').each( function(i){
        $(this).addClass('animated fadeInRight');
		setTimeout(function(){ $(this).removeClass('fromleftimmediat fadeInRight')},2000);
    }); 
});

$(window).on('scroll', function() {
    gestionTB();
});
function gestionTB(){
	var bottom_of_window = $(window).scrollTop() + $(window).height();
    
    $('.fromtop').each( function(i){
        var bottom_of_object = $(this).offset().top + ($(this).outerHeight()/2);
        if( bottom_of_window > bottom_of_object ){
            $(this).addClass('animated fadeIn').removeClass('fromtop');
        }
    }); 
	
	$('.fadeIn').each( function(i){
        var bottom_of_object = $(this).offset().top + ($(this).outerHeight()/2);
        if( bottom_of_window < bottom_of_object ){
            $(this).addClass('fromtop').removeClass('animated fadeIn');
        }
    }); 
	
	$('.fromleft').each( function(i){
        var bottom_of_object = $(this).offset().top + ($(this).outerHeight()/2);
        if( bottom_of_window > bottom_of_object ){
            $(this).addClass('animated fadeInLeft').removeClass('fromleft');
        }
    }); 
	$('.fromright').each( function(i){
        var bottom_of_object = $(this).offset().top + ($(this).outerHeight()/2);
        if( bottom_of_window > bottom_of_object ){
            $(this).addClass('animated fadeInRight').removeClass('fromright');
        }
    }); 
	
	
	$('.fadeInLeft').each( function(i){
        var bottom_of_object = $(this).offset().top + ($(this).outerHeight()/2);
        if( bottom_of_window < bottom_of_object ){
            $(this).addClass('fromleft').removeClass('animated fadeInLeft');
        }
    }); 
	$('.fadeInRight').each( function(i){
        var bottom_of_object = $(this).offset().top + ($(this).outerHeight()/2);
        if( bottom_of_window < bottom_of_object ){
            $(this).addClass('fromright').removeClass('animated fadeInRight');
        }
    }); 
}
