$(document).ready(function() {
    console.log("logic.js is successfully linked");
    //set parameter for search term
    let query = "";
    //set parameter for number of records to retrieve
    let numOfRecords = "";
    //set parameter for start year (optional)
    let startDate;
    //set parameter for end year (optional)
    let endDate;
    // TODO: add numOfRecors to this request URL
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&begin_date=" + startDate + "&end_date=" + endDate + "api-key=frybrVidz4oQ4nanro4Ft8CKfvGkIni3"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        });
        var results = response.docs;
        for (var i = 0; i < results.length; i++) {
            let headline = results[i].headline.main;
            let pubDate = results[i].pub_date;
            let snippet = results[i].snippet;
            let url = results[i].web_url;
            let resultDiv = $("<div>")
            let headlineContent = $("<a>").addClass("lead").text(headline).attr("src", url);
            let datePara = $("<p>").text(pubDate);
            let snipperContent = $("<p>").text(snippet);
            resultDiv
                .append(headlineContent)
                .append(datePara)
                .append(snipperContent);
            $("#topArticles").append(resultDiv);
        }
    });