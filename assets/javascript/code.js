var zip = seatgeekResponse.postal_code;

//weather call
var settings = 
{
    "async": true,
    "crossDomain": true,
    "url": "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=https://samples.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid=5ea5e37dfb4cfb42bf600406ca2185cc",
    "method": "GET"
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

searchParam = $("#searchBar").val().trim();
