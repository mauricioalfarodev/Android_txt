// JavaScript Document
// modification config
//$(document).bind("mobileinit", function(){
//	$.extend(  $.mobile , {
//		loadingMessage : "Chargement en cours",
//		backBtnText : "Retour"
//	});
//	$.mobile.page.prototype.options.backBtnText = "Retour";
//});

$(document).bind("mobileinit", function(){
      //$.mobile.metaViewportContent = "width=device-width, minimum-scale=1, maximum-scale=2";
	  $.mobile.page.prototype.options.backBtnText = "Retour";
	  $.mobile.loadingMessage = "Veuillez patienter";
});



///////////////////////////////////////////////////////////////////////////////////////////////


$('.calcIMC').live('click', function(){
    calculerIMC();
});


function calculerIMC() {
	var m = "poids svp !";
	var s = "taille svp !";
	var ms = "Veuillez indiquer votre ";
	var a = poids.value;
	var b = taille.value;
	$(".resultats").css("display","block");
	$(".resultats").css("background-color","#F60");
	if (poids.value=="" && taille.value=="") {
		$(".resultats").html(ms + 'taille et votre ' + m);
	} else if (a=="") {
		$(".resultats").html(ms + m);
	} else if (b=="") {
		$(".resultats").html(ms + s);
	} else {
		var taille1 = taille.value;
		var poids1 = poids.value;
		
		var calculer = taille1 * taille1;
		var calculer1 = Math.round(poids1 / calculer);
		var c = calculer1;
	
		if(calculer1 < 18.5) {
			$(".resultats").css("background-color","#C00");
			$(".resultats").html("Votre IMC est de "+calculer1+ "<br>" +" Vous êtes en maigreur !");
		} else if(calculer1 >= 20 && calculer1 <= 25) {
			$(".resultats").css("background-color","#090");
			$(".resultats").html("Votre IMC est de "+calculer1+ "<br>" +" Vous avez une corpulence normale.");
		} else if(calculer1 >= 25 && calculer1 <= 30) {
			$(".resultats").css("background-color","#C00");
			$(".resultats").html("Votre IMC est de "+calculer1+ "<br>" +" Vous êtes en surpoids !");
		} else if(calculer1 >= 30 && calculer1 <= 35) {
			$(".resultats").css("background-color","#C00");
			$(".resultats").html("Votre IMC est de "+calculer1+ "<br>" +" Vous êtes en obésité !");
		} else if(calculer1 >= 35 && calculer1 <= 40) {
			$(".resultats").css("background-color","#C00");
			$(".resultats").html("Votre IMC est de "+calculer1+ "<br>" +" Vous êtes en obésité sévère !");
		} else if(calculer1 > 40) {
			$(".resultats").css("background-color","#C00");
			$(".resultats").html("Votre IMC est de "+calculer1+ "<br>" +" Vous êtes en obésité morbide !");
		}												
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////
