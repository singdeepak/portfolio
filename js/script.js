
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 250) {
	    $("header").css("background" , "#fff");
	    $("header").css("box-shadow" , "0px 2px 6px 0px rgba(0, 0, 0, 0.15)");
	   
	  }

	  else{
		  $("header").css("background" , "#000");
		  $("header").css("box-shadow" , "0px 2px 6px var(--black)");  	
	  }
  })
})