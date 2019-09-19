
function pullTicketMaster() {
	var city = 'Nashville';
	var apiKey = 'aebAmnmDUA7RQsYCzucwhkP7dqjKFGaH';
	var apiURL = `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&apikey=${apiKey}`;
  
	var options = {
	  url: apiURL,
	  method: 'GET'
	};
  
	$.ajax(options).then(function(response) {
	  // console.log(response);
	  var data = response._embedded;
	  var cardImgSrc = data.events[0].images[0].url;
	  var cardTitle = data.events[0].name;
  
	
  
  
	  console.log(response);
	  console.log(cardTitle);
	  
	});
  }
  pullTicketMaster();
  

