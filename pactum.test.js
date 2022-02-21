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

it('Get 400-404 status with faulty user credentials, this means that login fails', async () => {
  pactum.spec()
    .get('https://handla.api.ica.se/api/login')
    .expectStatus(401); // Server should return with answer 400-404 or similar without user credentials
});

it('Get 200 status with user credentials, this means that login works', async () => {
   pactum.spec()
  .get('https://handla.api.ica.se/api/login/')
  .withHeaders('Authorization', 'Basic MTk3rrAyMDQ3OTEwOjMxNDE1OQ==')
  .withHeaders({
    'Content-Type': 'application/json'
    .expectStatus(200);  // Server should return with answer faulty with user credentials
  });

  it('Get 200 status with user credentials, this means that login works', async () => {
  pactum.spec()
  .get('https://handla.api.ica.se/api/login/')
  .withHeaders('Authorization', 'Basic MTk3MzAyMDQ3OTEwOjMxNDE111==')
  .withHeaders({
    'Content-Type': 'application/json'
  .expectStatus(401);

});  

