// JavaScript Document
$(document).ready(function(){
	
  $(".btn-toggle").click(function(){
    $("#menu").slideToggle("fast");
  });
	
});

$('#banner').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})