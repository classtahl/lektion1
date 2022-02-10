var request = require('request');
const fs = require('fs');
var headers = {
    'Authorization': 'Basic MTk3MzAyMDQ3OTEwOjMxNDE1OQ=='
};

var options = {
    url: 'https://handla.api.ica.se/api/login/', //logga in på ICA's site Login creditials is needed
    headers: headers
};

async function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      
       let data = JSON.stringify(body);
       fs.writeFileSync('./user.json',data); //Låt oss spara det Ica skickar tillbaka som en användare
    }
}

request(options, callback);

request.get(options, (err, res, body) => {
    if (err) {
        return console.log("Err" + err);
    }
    console.log(`Status: ${res.statusCode}`);   // Skickar statusvar från servern 200 = OK
    console.log(body);
});


