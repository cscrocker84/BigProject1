
var searchParam;
var keywords = [searchParam.split(" ")];
var performer = "";
for(var i = 0; i <= keywords.length; i++)
{
    performer = performer + "%20" +keywords[i]
}

var seatgeekURLbyPerformer = "https://api.seatgeek.com/2/performers?q="+performer+"&client_id=MTg0MDYxODh"


  //meetup call 
  var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://seatgeek-seatgeekcom.p.rapidapi.com/performers",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "seatgeek-seatgeekcom.p.rapidapi.com",
		"x-rapidapi-key": "d80dc8d8e3msh8a2255600c701e6p1916f8jsn46bcf06e5193"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});


var zip = seatgeekResponse.postal_code;

//eventbrite call
var settings = 
{
	"async": true,
	"crossDomain": true,
	"url": "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=https://samples.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid=5ea5e37dfb4cfb42bf600406ca2185cc",
	"method": "GET"
}
​
$.ajax(settings).done(function (response) {
	console.log(response);
});


