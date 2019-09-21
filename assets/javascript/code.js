var searchRes = [];
var keywords;
var searchString = "";

function pullTicketMaster() {
	var city = 'Nashville';
	var apiKey = 'aebAmnmDUA7RQsYCzucwhkP7dqjKFGaH';
	var apiURL = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchString}&city=${city}&apikey=${apiKey}`;

	var options = {
		url: apiURL,
		method: 'GET'
	};

	$.ajax(options).then(function (ticketmasterRes) {
		// console.log(response);
		var data = ticketmasterRes._embedded;
		//var cardImgSrc = data.events[0].images[0].url;
		var cardTitle = data.events[0].name;
		var cardVenue = data.events[0]._embedded.venues[0].name;
		var cardDate = data.events[0].dates.start.localDate;
		var seatMapURL = data.events[0]._embedded.venues[0].images[0].url;
		var cardInfo = data.events[0].ticketLimit.info;

		console.log(ticketmasterRes);
		console.log(cardTitle);
		console.log(cardVenue);
		console.log(apiURL)

		$("#venueContent").text(cardVenue);
		$("#eventName").text(cardTitle);
		$("#dateContent").text(cardDate);
		$("#moreInfoContent").text(cardInfo);
		$("#seatMap").attr("src", seatMapURL);
	});
}
$(document).keypress(function (e) {
	if (e.which == 13) {
		keywords = $("#searchBar").val().trim();
		searchRes = keywords.split(" ");
		console.log(keywords)
		console.log(searchRes)
		for (var i = 0; i < searchRes.length; i++) {
			searchString = searchString + '%20' + searchRes[i]
		}
		pullTicketMaster();
	}
});

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=Nashville&units=imperial&appid=8563487616624dfff87879f0e162a7a6";

$.ajax({
	url: queryURL,
	method: "GET"
})
	.then(function (weatherRes) {
		console.log(queryURL);
		console.log(weatherRes);
		$("#weatherContentTemp").text("Temperature (F) " + weatherRes.main.temp);
		$("#weatherContentHumidity").text("Humidity (%) " + weatherRes.main.humidity);
		$("#weatherContentType").text("The weather will be " + weatherRes.weather[0].description);
		console.log("Temperature (F): " + weatherRes.main.temp);
	});

// weather call
var weatherSettings = {
	"async": true,
	"crossDomain": true,
	"url": "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=https://samples.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=5ea5e37dfb4cfb42bf600406ca2185cc",
	"method": "GET"
}

$.ajax(weatherSettings).done(function (response) {
	console.log(response);

	searchParam = $("#searchBar").val().trim();

});

