var axios = require('axios');

// This variable will be pre-programmed with our authentication key (the one we received when we registered)
var authKey = "159df7a0ef7748f482425129c491ff9d";


var helpers = {

	runQuery: function(queryTerm, startYear, endYear){

          var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + queryTerm + "&begin_date=" + startYear + "&end_date=" + endYear;

		

		return axios.get(queryURL)
			.then(function(response){
                    console.log(response);
                    var sendThisData =[];


                    var doc = response.data.response.docs;
                    var returnData = [[],[],[],[],[]];
                    for (var i = 0; i < returnData.length; i++) {
                         returnData[i].push(doc[i].headline.main);
                         returnData[i].push(doc[i].web_url);
                         returnData[i].push(doc[i].pub_date);
                    }

                    /////////////////////////////////////////////////////////////
				//return JSON.stringify(response);
				// return sendThisData;
                    return returnData;
		});

	}

};


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
