// Simple test o get a responsetime




var request = require('request');

let start_time = new Date().getTime();

request.get('https://handla.api.ica.se/api/upclookup?upc=7318690102369', function (err, response) {
    console.log('Time elapsed since queuing the request:', new Date().getTime() - start_time);
});

request.get({ url: 'https://handla.api.ica.se/api/upclookup?upc=7318690102366', time: true }, function (err, response) {
    console.log('The actual time elapsed:', response.elapsedTime);


});