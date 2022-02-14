const pactum = require('pactum');

 pactum.spec()
    .get('https://handla.api.ica.se/api/login') // The answer should be 401 since login is invalid (usercredentials is missing)
    .expectStatus(401)
    .expectHeader('content-type', 'application/json; charset=utf-8')
    .expectHeader('connection', /\w+/)
    .expectHeaderContains('content-type', 'application/json')
    .expectResponseTime(100);

it('Get 400-404 status without user credentials', async () => {
  pactum.spec()
    .get('https://handla.api.ica.se/api/login')
    .expectStatus(401); // Server should return with answer 400-404 or similar without user credentials
});

   pactum.spec()
  .get('https://handla.api.ica.se/api/login/')
  .withHeaders('Authorization', 'Basic MTk3rrAyMDQ3OTEwOjMxNDE1OQ==')
  .withHeaders({
    'Content-Type': 'application/json'
  })
  .expectStatus(200);  // Server should return with answer faulty with user credentials

  pactum.spec()
  .get('https://handla.api.ica.se/api/login/')
  .withHeaders('Authorization', 'Basic MTk3MzAyMDQ3OTEwOjMxNDE111==')
  .withHeaders({
    'Content-Type': 'application/json'
  })
  .expectStatus(200);  // Server should return with answer 200 with user credentials


  