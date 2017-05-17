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

svgExt.addEventListener("load",function() {

  svgDoc = svgExt.contentDocument;
  console.log("SVG contentDocument Loaded!");

  // Le SVG est chargé, on peut maintenant
  // définir les formes qu'on souhaite manipuler
  svgEspagne = svgDoc.getElementById("espagne");

  // On va rendre "sensible" un élément du SVG
  svgEspagne.addEventListener("mouseover", svgCountryInfo);

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