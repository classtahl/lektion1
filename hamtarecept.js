


// ** Detta skript slumpar ett recept via handla.ica...   ** //

var request = require('request');
const fs = require('fs');

var headers = {
    'User-Agent': '/clas stahl @ utb.ecutbildning.se with nodejs', // Kunde inte låta bli att skapa en egen agent
    
};

var options = {
    url: 'https://handla.api.ica.se//api/recipes/random?numberofrecipes=1', //hyperlänken som slupar x antal recept, siffran anger hur många som skall som skall skickas tillbaka
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        const objData = JSON.parse(body);
        const data = JSON.stringify(objData, null, 2);
       
        fs.writeFileSync('./slumpatrecept.json',data);  //Sparar svaret som ett json objekt
    }
}

request(options, callback);

