// JavaScript Document
// JavaScript Document

/*
 * SVG Animate
 */

// Le code suivant charge le fichier SVG externe, 
// afin de le rendre accessible par Javascript

var svgRomandieun = document.getElementById("carteromandie");

// On définit tous les objets SVG qu'on souhaite ensuite manipuler
var svgDocun, svgJura, svgNeuchatel, svgVaud, svgGeneve, svgFribourg, svgValais, svgSion, svgGe, svgCdf, svgLausanne;


svgRomandieun.addEventListener("load",function() {

  svgDocun = svgRomandieun.contentDocument;
  console.log("SVG contentDocument Loaded!");

  // Le SVG est chargé, on peut maintenant
  // définir les formes qu'on souhaite manipuler
  svgJura = svgDocun.getElementById("jura");
  svgNeuchatel = svgDocun.getElementById("neuchatel");
  svgVaud = svgDocun.getElementById("vaud");
  svgGeneve = svgDocun.getElementById("ge");
  svgFribourg = svgDocun.getElementById("fribourg");
  svgValais = svgDocun.getElementById("valais");
  svgSion = svgDocun.getElementById("sion");
  svgGe = svgDocun.getElementById("ge");
  svgCdf = svgDocun.getElementById("cdf");
  svgLausanne = svgDocun.getElementById("lausanne");

  // On va rendre "sensible" un élément du SVG
  svgJura.addEventListener("mouseenter", svgCountryInfo);
  svgJura.addEventListener("click", svgCountryInfo);
  svgJura.addEventListener("mouseleave", svgCountryHide);
  
  svgNeuchatel.addEventListener("mouseenter", svgCountryInfo);
  svgNeuchatel.addEventListener("click", svgCountryInfo);
  svgNeuchatel.addEventListener("mouseleave", svgCountryHide);
  
  svgVaud.addEventListener("mouseenter", svgCountryInfo);
  svgVaud.addEventListener("click", svgCountryInfo);
  svgVaud.addEventListener("mouseleave", svgCountryHide);
  
  svgGeneve.addEventListener("mouseenter", svgCountryInfo);
  svgGeneve.addEventListener("click", svgCountryInfo);
  svgGeneve.addEventListener("mouseleave", svgCountryHide);
  
  svgFribourg.addEventListener("mouseenter", svgCountryInfo);
  svgFribourg.addEventListener("click", svgCountryInfo);
  svgFribourg.addEventListener("mouseleave", svgCountryHide);
  
  svgValais.addEventListener("mouseenter", svgCountryInfo);
  svgValais.addEventListener("click", svgCountryInfo);
  svgValais.addEventListener("mouseleave", svgCountryHide);
  
  svgSion.addEventListener("mouseenter", svgCountryInfo);
  svgSion.addEventListener("click", svgCountryInfo);
  svgSion.addEventListener("mouseleave", svgCountryHide);
  
  svgGe.addEventListener("mouseenter", svgCountryInfo);
  svgGe.addEventListener("click", svgCountryInfo);
  svgGe.addEventListener("mouseleave", svgCountryHide);
  
  svgLausanne.addEventListener("mouseenter", svgCountryInfo);
  svgLausanne.addEventListener("click", svgCountryInfo);
  svgLausanne.addEventListener("mouseleave", svgCountryHide);
  
  svgCdf.addEventListener("mouseenter", svgCountryInfo);
  svgCdf.addEventListener("click", svgCountryInfo);
  svgCdf.addEventListener("mouseleave", svgCountryHide);

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
