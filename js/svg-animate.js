// JavaScript Document
/*
 * SVG Animate
 */

// Le code suivant charge le fichier SVG externe, 
// afin de le rendre accessible par Javascript

var svgExt = document.getElementById("carteeurope");
var svgDoc;

console.log(svgExt);

// On définit tous les objets SVG qu'on souhaite ensuite manipuler
var svgEspagne;
var svgFrance;
var svgUk;
var svgAllemagne;
var svgLuxembourg;
var svgItalie;
var svgPortugal;

svgExt.addEventListener("load",function() {

  svgDoc = svgExt.contentDocument;
  console.log("SVG contentDocument Loaded!");

  // Le SVG est chargé, on peut maintenant
  // définir les formes qu'on souhaite manipuler
  svgEspagne = svgDoc.getElementById("espagne");
  svgFrance = svgDoc.getElementById("france");
  svgUk = svgDoc.getElementById("uk");
  svgAllemagne = svgDoc.getElementById("allemagne");
  svgLuxembourg = svgDoc.getElementById("luxembourg");
  svgItalie = svgDoc.getElementById("italie");
  svgPortugal = svgDoc.getElementById("portugal");

  // On va rendre "sensible" un élément du SVG
  svgEspagne.addEventListener("mouseenter", svgCountryInfo);
  svgEspagne.addEventListener("mouseleave", svgCountryHide);
  
  svgFrance.addEventListener("mouseenter", svgCountryInfo);
  svgFrance.addEventListener("mouseleave", svgCountryHide);
	
  svgUk.addEventListener("mouseenter", svgCountryInfo);
  svgUk.addEventListener("mouseleave", svgCountryHide);
   
  svgAllemagne.addEventListener("mouseenter", svgCountryInfo);
  svgAllemagne.addEventListener("mouseleave", svgCountryHide);
  
  svgLuxembourg.addEventListener("mouseenter", svgCountryInfo);
  svgLuxembourg.addEventListener("mouseleave", svgCountryHide);
   
  svgItalie.addEventListener("mouseenter", svgCountryInfo);
  svgItalie.addEventListener("mouseleave", svgCountryHide);
  
  svgPortugal.addEventListener("mouseenter", svgCountryInfo);
  svgPortugal.addEventListener("mouseleave", svgCountryHide);

 }, false);

function svgCountryInfo(){

  // ce qui se passe au hover:
  // on obtient l'ID de l'élément survolé:

  var CountryID = this.id;

  // on en déduit l'élément à rendre visible
  var CountryInfoClass = "." + CountryID + "hover";
  var CountryInfo = document.querySelector( CountryInfoClass );

  CountryInfo.style.display="block";

}

function svgCountryHide(){

  // ce qui se passe au hover:
  // on obtient l'ID de l'élément survolé:
  
  var CountryID = this.id;

  // on en déduit l'élément à rendre visible
  var CountryInfoClass = "." + CountryID + "hover";
  var CountryInfo = document.querySelector( CountryInfoClass );

  CountryInfo.style.display="none";

}