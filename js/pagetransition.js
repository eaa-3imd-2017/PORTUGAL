// JavaScript Document
//Mobile

$( "#menu-mobile a" ).click(function() {
 
  // récupérer l'élément cliqué
   var cible = $(this).attr('href');
  
    // 1. masquer le niveau actif
    $( ".niveauactif" ).hide( 1000, function() {
  
  // retirer la classe de l'élèment caché
  $(this).removeClass( "niveauactif" );
  
  // afficher le niveau correspondant à cet attribu
    // 2. afficher le nouveau niveau
	
  $(cible).fadeIn( 1000);
  $(cible).addClass( "niveauactif" );
  });

  
  return false;
});

//Desktop

$( "#menu-desktop a" ).click(function() {
 
  // récupérer l'élément cliqué
   var cible = $(this).attr('href');
  
    // 1. masquer le niveau actif
    $( ".niveauactif" ).hide( 1000, function() {
  
  // retirer la classe de l'élèment caché
  $(this).removeClass( "niveauactif" );
  
  // afficher le niveau correspondant à cet attribu
    // 2. afficher le nouveau niveau
	
  $(cible).fadeIn( 1000);
  $(cible).addClass( "niveauactif" );
  });

  
  return false;
});


function pagetransition(){
 
  // récupérer l'élément cliqué
  // console.log ("this: "+this);
     
  var cible = "." + this.id + "next";
   
   console.log ("cible: "+cible);
  
    // 1. masquer le niveau actif
    $( ".niveauactif" ).hide( 2000, function() {
  
  		// retirer la classe de l'élèment caché
  		$(this).removeClass( "niveauactif" );
  
  // afficher le niveau correspondant à cet attribu
    // 2. afficher le nouveau niveau
	
		  $(cible).fadeIn( 3000);
		  $(cible).addClass( "niveauactif" );
		  console.log ("done");
		  		  
	});
}
