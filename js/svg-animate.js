// JavaScript Document

/*
 * SVG Animate
 */

// Le code suivant charge le fichier SVG externe, 
// afin de le rendre accessible par Javascript

var svgExt = document.getElementById("carteeurope");
var svgDoc;

// On définit tous les objets SVG qu'on souhaite ensuite manipuler
var svgEspagne;
var svgUk;
var svgAllemagne;
var svgLuxembourg;


svgExt.addEventListener("load",function() {

  svgDoc = svgExt.contentDocument;
  console.log("SVG contentDocument Loaded!");

  // Le SVG est chargé, on peut maintenant
  // définir les formes qu'on souhaite manipuler
  svgEspagne = svgDoc.getElementById("espagne");
  svgUk = svgDoc.getElementById("uk");
  svgAllemagne = svgDoc.getElementById("allemagne");
  svgLuxembourg = svgDoc.getElementById("luxembourg");

  // On va rendre "sensible" un élément du SVG
  svgEspagne.addEventListener("mouseenter", svgCountryInfo);
  svgEspagne.addEventListener("mouseleave", svgCountryHide);
  
  svgUk.addEventListener("mouseenter", svgCountryInfo);
  svgUk.addEventListener("mouseleave", svgCountryHide);
   
  svgAllemagne.addEventListener("mouseenter", svgCountryInfo);
  svgAllemagne.addEventListener("mouseleave", svgCountryHide);
  
  svgLuxembourg.addEventListener("mouseenter", svgCountryInfo);
  svgLuxembourg.addEventListener("mouseleave", svgCountryHide);

 }, false);

function svgCountryInfo(){

  // ce qui se passe au hover:
  // on obtient l'ID de l'élément survolé:

  var CountryID = this.id;
  console.log("svgCountryInfo: "+CountryID);

  // on en déduit l'élément à rendre visible
  var CountryInfoClass = "." + CountryID + "hover";
  var CountryInfo = document.querySelector( CountryInfoClass );

  CountryInfo.style.display="block";

}

function svgCountryHide(){

  // ce qui se passe au hover:
  // on obtient l'ID de l'élément survolé:
  
  var CountryID = this.id;
  console.log("svgCountryHide: "+CountryID);

  // on en déduit l'élément à rendre visible
  var CountryInfoClass = "." + CountryID + "hover";
  var CountryInfo = document.querySelector( CountryInfoClass );

  CountryInfo.style.display="none";

}

