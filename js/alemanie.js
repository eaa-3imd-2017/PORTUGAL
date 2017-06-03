// JavaScript Document

var svgAlemanie = document.getElementById("carteallemande");

// On définit tous les objets SVG qu'on souhaite ensuite manipuler
var svgDocdeux, svgZurich, svgNidwald;


svgAlemanie.addEventListener("load",function() {

  svgDocdeux = svgAlemanie.contentDocument;
  console.log("SVG contentDocument Loaded!");

  // Le SVG est chargé, on peut maintenant
  // définir les formes qu'on souhaite manipuler
  svgZurich = svgDocdeux.getElementById("cantonzurich");
  svgNidwald = svgDocdeux.getElementById("cantonnidwald");

  // On va rendre "sensible" un élément du SVG
  svgZurich.addEventListener("mouseenter", svgCountryInfo);
  svgZurich.addEventListener("click", svgCountryInfo);
  svgZurich.addEventListener("mouseleave", svgCountryHide);
  
  svgNidwald.addEventListener("mouseenter", svgCountryInfo);
  svgNidwald.addEventListener("click", svgCountryInfo);
  svgNidwald.addEventListener("mouseleave", svgCountryHide);
  

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
