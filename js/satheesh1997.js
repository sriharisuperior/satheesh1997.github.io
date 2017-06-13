$(document).ready(function(){
	console.log("http://www.satheesh1997.ml loaded successfully");
	$(".preloader").fadeOut("slow");
	setInterval("color_name()",1000);
	$(".img-satheesh").effect( "pulsate", {times:20}, 2000 );
});

function load_profile(){
	console.log("Loading Profile Page");
	$(".preloader").fadeIn("fast");
	$("#content").load("details.html");
	$(".preloader").fadeOut("slow");
}

function load_home(){
	console.log("Loading Home Again");
	$(".preloader").fadeIn("fast");
	$("#content").load("home.html");
	$(".preloader").fadeOut("slow");
}

var color = 0; //0->white 1->yellow 2->red

function color_name(){
	$(".satheesh-kumar").effect('shake', {times:3}, 500);
	if(color == 0){
		$(".menu-links").css('color','white');
		$(".fa-close").css('color','white');
		$(".satheesh").css('color','orange');
		$(".kumar").css('color','green');
	}
	else if(color == 1){
		$(".menu-links").css('color','yellow');
		$(".fa-close").css('color','yellow');
		$(".satheesh").css('color','cyan');
		$(".kumar").css('color','pink');
	}
	else if(color == 2){
		$(".menu-links").css('color','red');
		$(".satheesh").css('color','yellow');
		$(".fa-close").css('color','cyan');
		$(".kumar").css('color','#2fb72b');
	}
	else{
		color = -1;
	}
	color++;
	if(color > 2){
		color = 0;
	}
}