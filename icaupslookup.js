/** 
 
  
                           Icas inoficiella api https://handla.api.ica.se/api 
                           Detta enkla skript är för att kolla upp matvaror, numret är strekoden som finns på baksidan/ undersidan av varan
     -                     Koden är baserad på info från @author https://github.com/svendahlstrand/ica-api
                           Läs mer om projektet på min github @author https://github.com/classtahl/ica-api-javascript
                           En mer tillförlig dokumentation om detta api är under utveckling.




 **/


var request = require('request');
const fs = require('fs');

var options = {
    url: 'https://handla.api.ica.se/api/upclookup?upc=7310070124906' 
}; /// Streckkod 7318690102366 = Chai te ICA  "07310867002714","ItemDescription":"Filmjölk Jordgubb Skånemejerier 07300400118408","ItemDescription":"Knäckebröd Husman Wasa 520g
    // 7310867501286","ItemDescription":"Lantmjölk Gammaldags Åsen 1.5 L ,"07310867000109","ItemDescription":"Lantmjölk Gammaldags Åsens 2L
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        let data = JSON.stringify(body);
        fs.writeFileSync('./artikel.json',data);

    }
}

request(options, callback);