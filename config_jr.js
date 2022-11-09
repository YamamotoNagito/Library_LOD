var endpoint = "https://api-jrslod.uedayou.net/sparql";
var query = (function () {/*
PREFIX dc: <http://purl.org/dc/elements/1.1/>
prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
prefix dcterms: <http://purl.org/dc/terms/>
prefix schema: <http://schema.org/>
prefix foaf: <http://xmlns.com/foaf/0.1/>
prefix owl: <http://www.w3.org/2002/07/owl#>
prefix geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>
prefix propja: <http://ja.dbpedia.org/property/>
prefix dbpediaowl: <http://dbpedia.org/ontology/>
prefix wdt: <http://www.wikidata.org/prop/direct/>
prefix ic: <http://imi.go.jp/ns/core/rdf#>

select ?placeLabel ?lat ?long where{
  ?uri a <https://uedayou.net/jrslod/Class/駅>;
  rdfs:label ?placeLabel;
  geo:lat ?lat;
  geo:long ?long;

  filter( regex( ?placeLabel, '広島' ) )
}
*/}).toString().match(/\n([\s\S]*)\n/)[1];

var maxZoom = 19;
var baseUrl = "https://tile.openstreetmap.jp/{z}/{x}/{y}.png";
var baseAttribution = 'Map data &copy; OpenStreetMap contributors, Tiles Courtesy of OpenStreetMap Japan';
var subdomains = '1234';
var clusterOptions = { showCoverageOnHover: false, maxClusterRadius: 50 };
var labelColumn = "label";
var labelLatitude = "lat";
var labelLongitude = "long";
var opacity = 1.0;