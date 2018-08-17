$('.toggle').on("click",function(){

	$('.navbar__menu').slideToggle(600);
});

$(document).ready(function(){
	$("#lightGallery").lightGallery();
})
	
$(window).on('scroll', function() {

	var y = $(window).scrollTop();
	   if (y > 1) {
	   	$('#top').fadeIn(200);
	     $('.navbar').css("background","rgba(0,10,0,0.6)");
	   }
      else {
      		$('#top').hide(200);
         $('.navbar').css("background","rgba(0,10,0,0.2)");
      }
    
	});

document.getElementById('top').onclick = function(){

var scroll  = window.pageYOffset;
var timer;
scrollToTop();


function scrollToTop(){
	if(scroll>1){

		window.scrollTo(0,scroll);
		scroll-=30;
		timer = setTimeout(scrollToTop,10);
	}
	else{
		window.scrollTo(0,0);
		clearTimeout(timer);
	}
}
}
