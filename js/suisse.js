// JavaScript Document
var svgSuisse = document.getElementById("cartesuisse");

// On définit tous les objets SVG qu'on souhaite ensuite manipuler
var svgDoctrois, svgRomandie, svgAlemanie, svgItalie;


svgSuisse.addEventListener("load",function() {

  svgDoctrois = svgSuisse.contentDocument;
  console.log("l'essai");

  // Le SVG est chargé, on peut maintenant
  // définir les formes qu'on souhaite manipuler
  svgRomandie = svgDoctrois.getElementById("romandie");
  svgAlemanie = svgDoctrois.getElementById("alemanie");
  svgItalie = svgDoctrois.getElementById("italienne");

  // On va rendre "sensible" un élément du SVG
  svgRomandie.addEventListener("mouseenter", svgRegionInfo);
  svgRomandie.addEventListener("click", svgRegionInfo);
  svgRomandie.addEventListener("mouseleave", svgRegionHide);
  svgRomandie.addEventListener("click", pagetransition, false);
  
  svgAlemanie.addEventListener("mouseenter", svgRegionInfo);
  svgAlemanie.addEventListener("click", svgRegionInfo);
  svgAlemanie.addEventListener("mouseleave", svgRegionHide);
  svgAlemanie.addEventListener("click", pagetransition, false);
  
  svgItalie.addEventListener("mouseenter", svgRegionInfo);
  svgItalie.addEventListener("click", svgRegionInfo);
  svgItalie.addEventListener("mouseleave", svgRegionHide);

 }, false);

function svgRegionInfo(){

  // ce qui se passe au hover:
  // on obtient l'ID de l'élément survolé:

  var RegionID = this.id;
  console.log("svgRegionInfo: "+RegionID);

  // on en déduit l'élément à rendre visible
  var RegionInfoClass = "." + RegionID + "hover";
  var RegionInfo = document.querySelector( RegionInfoClass );

  RegionInfo.style.display="block";

}

function svgRegionHide(){

  // ce qui se passe au hover:
  // on obtient l'ID de l'élément survolé:
 

  var RegionID = this.id;
  console.log("svgRegionHide: "+RegionID);

  // on en déduit l'élément à rendre visible
  var RegionInfoClass = "." + RegionID + "hover";
  var RegionInfo = document.querySelector( RegionInfoClass );

  RegionInfo.style.display="none";

}



