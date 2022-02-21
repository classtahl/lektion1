const pactum = require('pactum');

it('Get 401 status with faulty user credentials, this means that login is incorrect', async () => {
  pactum.spec()
  .get('https://handla.api.ica.se/api/login/')
  .withAuth('Authorization', 'Basic MTk3MzAyMDQ3OTEwOjMxNDE111==')
  .expectStatus(401);


});
