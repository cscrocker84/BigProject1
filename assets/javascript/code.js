$(document).ready(function(){


	var searchParam;
	var keywords = [searchParam.split(" ")];
	var performer = "";

	for(var i = 0; i <= keywords.length; i++)
	{
		performer = performer + "%20" +keywords[i]
	}

	var ticketmasterURLbyPerformer = "https://app.ticketmaster.com/discovery/v2/events.json?keyword="+performer+"&postalCode=37201&apikey=IeNsrAdcreZTvgQH5cJhiO0JA2RqVAWw";


  // ticketmaster call ?
 	 var tmSettings = {
		type:"GET",
		url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=IeNsrAdcreZTvgQH5cJhiO0JA2RqVAWw",
		async:true,
		dataType: "json",
		success: function(json) {
					console.log(json);
					// Parse the response.
					// Do other things.
				 },
		error: function(xhr, status, err) {
					// This time, we do not end up here!
				 }
	}

	$.ajax(tmSettings).done(function(ticketmasterResponse){
		console.log(ticketmasterResponse);
	});



	// weather call
	var weatherSettings = {
		"async": true,
		"crossDomain": true,
		"url": "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=https://samples.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid=5ea5e37dfb4cfb42bf600406ca2185cc",
		"method": "GET"
	}
	​
	$.ajax(weatherSettings).done(function(response){
		console.log(response);

	searchParam = $("#searchBar").val().trim();

	});


// $.ajax({
// 	type:"GET",
// 	url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=IeNsrAdcreZTvgQH5cJhiO0JA2RqVAWw",
// 	async:true,
// 	dataType: "json",
// 	success: function(json) {
// 				console.log(json);
// 				// Parse the response.
// 				// Do other things.
// 				},
// 	error: function(xhr, status, err) {
// 				// This time, we do not end up here!
// 			 }
// });



});
