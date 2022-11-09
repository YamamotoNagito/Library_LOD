var endpoint = "https://query.wikidata.org/sparql";
var query = (function () {/*
SELECT ?placeLabel ?lat ?long
WHERE {
  ?placex wdt:P625 ?location;
         wdt:P31 wd:Q265662;
         wdt:P17 wd:Q17.
  BIND(geof:latitude(?location) AS ?lat)
  BIND(geof:longitude(?location) AS ?long)
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
} 
*/}).toString().match(/\n([\s\S]*)\n/)[1];

var maxZoom = 19;
var baseUrl = "https://tile.openstreetmap.jp/{z}/{x}/{y}.png";
var baseAttribution = 'Map data &copy; OpenStreetMap contributors, Tiles Courtesy of OpenStreetMap Japan';
var subdomains = '1234';
var clusterOptions = { showCoverageOnHover: false, maxClusterRadius: 30 };
var labelColumn = "placeLabel";
var labelLatitude = "lat";
var labelLongitude = "long";
var opacity = 1.0;