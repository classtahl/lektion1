const pactum = require('pactum');


it('Get 401 status. Login with out credentials. Username and password is missing, login fails', async () => {
 pactum.spec()
    .get('https://handla.api.ica.se/api/login') // The answer should be 401 since login is invalid (usercredentials is missing)
    .expectStatus(401)
    .expectHeader('content-type', 'application/json; charset=utf-8')
    .expectHeader('connection', /\w+/)
    .expectHeaderContains('content-type', 'application/json')
    .expectResponseTime(20000);
});

it('Get 401 status without any login information, this means that login fails', async () => {
  pactum.spec()
    .get('https://handla.api.ica.se/api/login')
    .expectStatus(401); // Server should return with answer 401 without user credentials
});




