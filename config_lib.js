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
        org:classification ?class;
       org:hasSite [
#         a org:Site;
         geo:lat ?lat;
         geo:long ?long;
         org:siteAddress [
#          schema:addressLocality ?pref;
          schema:addressRegion ?pref
       ]
  ]
  filter(regex(?pref,""))
#  filter(regex(?long,'139.7'))

}
*/}).toString().match(/\n([\s\S]*)\n/)[1];

var query_lib = (function () {/*
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
        org:classification ?class;
       org:hasSite [
#         a org:Site;
         geo:lat ?lat;
         geo:long ?long;
         org:siteAddress [
#          schema:addressLocality ?pref;
          schema:addressRegion ?pref
       ]
  ]
  filter(regex(str(?class),""))
#  filter(regex(?long,'139.7'))

}
*/}).toString().match(/\n([\s\S]*)\n/)[1];

var query_no1 = (function () {/*
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
        org:classification ?class;
       org:hasSite [
#         a org:Site;
         geo:lat ?lat;
         geo:long ?long;
         org:siteAddress [
#          schema:addressLocality ?city;
          schema:addressRegion ?pref
       ]
  ]
  filter(regex(str(?class),""))
#  filter(regex(?long,'139.7'))

}
limit 1
*/}).toString().match(/\n([\s\S]*)\n/)[1];

// 最初は県ごと・館種ごとなどのセレクトボックスは非表示に
document.querySelector('[name="pref_name"]').style.display="none";
document.querySelector('[name="lib_name"]').style.display="none";
document.querySelector('[name="number_one_list"]').style.display="none";

// 最初にセレクトボックスから知りたい要素を選択する
let select_box = document.querySelector('[name="select_box"]');
select_box.onchange = event => {
    // セレクトボックス選択に応じて表示項目を変更する
    if(select_box.options[select_box.selectedIndex].value.toString() == "表示方法"){
        document.querySelector('[name="pref_name"]').style.display="none";
        document.querySelector('[name="lib_name"]').style.display="none";
        document.querySelector('[name="number_one_list"]').style.display="none";
        console.log("a");
    }else if(select_box.options[select_box.selectedIndex].value.toString() == "県ごと"){
        document.querySelector('[name="pref_name"]').style.display="block";
        document.querySelector('[name="lib_name"]').style.display="none";
        document.querySelector('[name="number_one_list"]').style.display="none";
        console.log("aa");
    }else if(select_box.options[select_box.selectedIndex].value.toString() == "館種ごと"){
        document.querySelector('[name="pref_name"]').style.display="none";
        document.querySelector('[name="lib_name"]').style.display="block";
        document.querySelector('[name="number_one_list"]').style.display="none";
        console.log("aaa");
    }else if(select_box.options[select_box.selectedIndex].value.toString() == "日本で一番○○な図書館は？"){
        document.querySelector('[name="pref_name"]').style.display="none";
        document.querySelector('[name="lib_name"]').style.display="none";
        document.querySelector('[name="number_one_list"]').style.display="block";
        console.log("aaaa");
    }
    console.log("aaaaa");
}
// TODO：以下の⓵・⓶をやっていく(⓷を参考にすること)
// ⓵館種ごとの表示に関して
let select_lib = document.querySelector('[name="lib_name"]');
select_lib.onchange = event => {
    console.log('b');
  // 国立が選択された場合
  if(select_lib.options[select_lib.selectedIndex].value.toString() == "国立図書館"){
    query_lib = query_lib.replace(/".*"/, '"http://id.ndl.go.jp/vocab/libtype#NationalLibraries"');
    console.log(query_lib);
  }else if(select_lib.options[select_lib.selectedIndex].value.toString() == "公共図書館"){
    query_lib = query_lib.replace(/".*"/, '"http://id.ndl.go.jp/vocab/libtype#PublicLibraries"');
    console.log(query_lib);
  }else if(select_lib.options[select_lib.selectedIndex].value.toString() == "大学図書館"){
    query_lib = query_lib.replace(/".*"/, '"http://id.ndl.go.jp/vocab/libtype#AcademicLibraries"');
    console.log(query_lib);
  }else if(select_lib.options[select_lib.selectedIndex].value.toString() == "学校図書館"){
    query_lib = query_lib.replace(/".*"/, '"http://id.ndl.go.jp/vocab/libtype#SchoolLibraryMediaCenters"');
    console.log(query_lib);
  }else if(select_lib.options[select_lib.selectedIndex].value.toString() == "専門図書館"){
    query_lib = query_lib.replace(/".*"/, '"http://id.ndl.go.jp/vocab/libtype#SpecialLibraries"');
    console.log(query_lib);
  }else if(select_lib.options[select_lib.selectedIndex].value.toString() == "類縁機関"){
    query_lib = query_lib.replace(/".*"/, '"http://id.ndl.go.jp/vocab/libtype#Relateorganizations"');
    console.log(query_lib);
  }


  $('body').modalmanager('loading').find('.modal-scrollable').off('click.modalmanager');
    qr = sendQuery(endpoint, query_lib);
    qr.fail(
        function (xhr, textStatus, thrownError) {
            $('body').modalmanager('removeLoading');
            alert("Error: A '" + textStatus + "' occurred.");
        }
    );
    qr.done(
        function (json) {
            dataJson = [];
            for (var i = 0; i < json.results.bindings.length; i++) {
                dataJson.push(_convSparqlJsonToGeoJson(json.results.bindings[i]));
            }
            typeAheadSource = ArrayToSet(typeAheadSource);
            $('#filter-string').typeahead({ source: typeAheadSource });

            $('body').modalmanager('removeLoading');
            $('body').removeClass('modal-open');
            addSparqlJsonMarkers();
        }
    );

    $("#clear").click(function (evt) {
        evt.preventDefault();
        $("#filter-string").val("").focus();
        addSparqlJsonMarkers();
    });
}
// ⓶日本一○○な図書館の表示に関して
let select_no1 = document.querySelector('[name="number_one_list"]');
select_no1.onchange = event => {
    console.log('b');
  // 東が選択された場合
  if(select_no1.options[select_no1.selectedIndex].value.toString() == "日本最東"){
    query_no1 = query_no1.replace(/(\}).*/, '$1 order by desc (?long)')
    console.log(query_no1);
  }else if(select_no1.options[select_no1.selectedIndex].value.toString() == "日本最西"){
    query_no1 = query_no1.replace(/(\}).*/, '$1 order by (?long)');

    console.log(query_no1);
  }else if(select_no1.options[select_no1.selectedIndex].value.toString() == "日本最南"){
    query_no1 = query_no1.replace(/(\}).*/, '$1 order by (?lat)');
    console.log(query_no1);
  }else if(select_no1.options[select_no1.selectedIndex].value.toString() == "日本最北"){
    query_no1 = query_no1.replace(/(\}).*/, '$1 order by desc (?lat)');
    console.log(query_no1);
  }


  $('body').modalmanager('loading').find('.modal-scrollable').off('click.modalmanager');
    qr = sendQuery(endpoint, query_no1);
    qr.fail(
        function (xhr, textStatus, thrownError) {
            $('body').modalmanager('removeLoading');
            alert("Error: A '" + textStatus + "' occurred.");
        }
    );
    qr.done(
        function (json) {
            dataJson = [];
            for (var i = 0; i < json.results.bindings.length; i++) {
                dataJson.push(_convSparqlJsonToGeoJson(json.results.bindings[i]));
            }
            typeAheadSource = ArrayToSet(typeAheadSource);
            $('#filter-string').typeahead({ source: typeAheadSource });

            $('body').modalmanager('removeLoading');
            $('body').removeClass('modal-open');
            addSparqlJsonMarkers();
        }
    );

    $("#clear").click(function (evt) {
        evt.preventDefault();
        $("#filter-string").val("").focus();
        addSparqlJsonMarkers();
    });
}
// ⓷県ごとの表示に関して
let select_pref = document.querySelector('[name="pref_name"]');
select_pref.onchange = event => {

  // 県ごとが選択された場合
  if(select_pref.options[select_pref.selectedIndex].value.toString() == "全国"){
    query = query.replace(/".*"/, '"' +  + '"');
  }else{
    query = query.replace(/".*"/, '"' + select_pref.options[select_pref.selectedIndex].value.toString() + '"');
  }

  console.log(query);

  $('body').modalmanager('loading').find('.modal-scrollable').off('click.modalmanager');
    qr = sendQuery(endpoint, query);
    qr.fail(
        function (xhr, textStatus, thrownError) {
            $('body').modalmanager('removeLoading');
            alert("Error: A '" + textStatus + "' occurred.");
        }
    );
    qr.done(
        function (json) {
            dataJson = [];
            for (var i = 0; i < json.results.bindings.length; i++) {
                dataJson.push(_convSparqlJsonToGeoJson(json.results.bindings[i]));
            }
            typeAheadSource = ArrayToSet(typeAheadSource);
            $('#filter-string').typeahead({ source: typeAheadSource });

            $('body').modalmanager('removeLoading');
            $('body').removeClass('modal-open');
            addSparqlJsonMarkers();
        }
    );

    $("#clear").click(function (evt) {
        evt.preventDefault();
        $("#filter-string").val("").focus();
        addSparqlJsonMarkers();
    });
}

// document.getElementsByName('pref_name').click(function() {

//     console.log("aaa");

// //     const num = document.getElementsByName('pref_name').selectedIndex;
// //     query = query.replace(/"[0-9]*"/, '"'+document.getElementsByName('pref_name').options[num].value.toString()+'"');
// //     console.log(query);

// //     $('body').modalmanager('loading').find('.modal-scrollable').off('click.modalmanager');
// //     qr = sendQuery(endpoint, query);
// //     qr.fail(
// //         function (xhr, textStatus, thrownError) {
// //             $('body').modalmanager('removeLoading');
// //             alert("Error: A '" + textStatus + "' occurred.");
// //         }
// //     );
// //     qr.done(
// //         function (json) {
// //             dataJson = [];
// //             for (var i = 0; i < json.results.bindings.length; i++) {
// //                 dataJson.push(_convSparqlJsonToGeoJson(json.results.bindings[i]));
// //             }
// //             typeAheadSource = ArrayToSet(typeAheadSource);
// //             $('#filter-string').typeahead({ source: typeAheadSource });

// //             $('body').modalmanager('removeLoading');
// //             $('body').removeClass('modal-open');
// //             addSparqlJsonMarkers();
// //         }
// //     );

// //     $("#clear").click(function (evt) {
// //         evt.preventDefault();
// //         $("#filter-string").val("").focus();
// //         addSparqlJsonMarkers();
// //     });
// });

var maxZoom = 19;
// var zoom = 10;
var pointGeometryZoomLevel  = 100;
var baseUrl = "https://tile.openstreetmap.jp/{z}/{x}/{y}.png";
var baseAttribution = 'Map data &copy; OpenStreetMap contributors, Tiles Courtesy of OpenStreetMap Japan';
var subdomains = '1234';
var clusterOptions = { showCoverageOnHover: false, maxClusterRadius: 50 };
var labelColumn = "label";
var labelLatitude = "lat";
var labelLongitude = "long";
var opacity = 1.0;
