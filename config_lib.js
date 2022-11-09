var endpoint = "https://uedayou.net/ld/library/api/sparql";
var query = (function () {/*
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX jrslod: <https://uedayou.net/jrslod/>
PREFIX ldlibterms: <https://uedayou.net/ld/library/terms/>
PREFIX dbpedia: <http://dbpedia.org/ontology/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX ic: <http://imi.go.jp/ns/core/rdf#>
PREFIX org: <http://www.w3.org/ns/org#>
PREFIX isil: <http://id.ndl.go.jp/vocab/isil/>
PREFIX ldlib: <https://uedayou.net/ld/library/>
PREFIX schema: <http://schema.org/>
PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX ndl: <http://ndl.go.jp/dcndl/terms/>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
select distinct * 
where {
  ?uri a schema:Organization;
       rdfs:label ?name;
#       schema:url ?webpage;
       org:hasSite [
#         a org:Site;
         geo:lat ?lat;
         geo:long ?long;
         org:siteAddress [
#          schema:addressLocality ?pref;
          schema:addressRegion ?pref                   
       ]
  ]
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