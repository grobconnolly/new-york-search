$(document).ready(function() {
console.log("logic.js is successfully linked");

//set parameter for search term
let query = "";

//set parameter for number of records to retrieve
let numOfRecords = "";

//set parameter for start year (optional)
let startYear = "sy=" + valueoffield;

//set parameter for end year (optional)
let endYear = "";

let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query +  "api-key=frybrVidz4oQ4nanro4Ft8CKfvGkIni3";

    $.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=frybrVidz4oQ4nanro4Ft8CKfvGkIni3",
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

    var results = response.data;

    for (var i = 0; i < results.length; i++) {

    }









});