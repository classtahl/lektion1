const pactum = require('pactum');

it('get 200 status from ica-api', async () => {
   await pactum.spec()
     .withMethod('GET')
    .get('https://handla.api.ica.se/api/login')
    .withHeaders('Authorization', 'Basic NzMwMjA0NzkxMDozMTQxNTk=')
    .expectStatus(200);
  
});



it('get 401 status from ica-api with faulty Authorization', async () => {
  await pactum.spec()
  .withMethod('GET')
 .get('https://handla.api.ica.se/api/login')
 .withHeaders('Authorization', 'Basic GzMwMjA0NzkxMDozMTQxNTk=')
 
 .expectStatus(401);
});

it('get 200 status and json answer and responstime', async () => {
await pactum.spec()
  .get('https://handla.api.ica.se/api/login')
  .withHeaders('Authorization', 'Basic NzMwMjA0NzkxMDozMTQxNTk=')
  .expectStatus(200)
  .expectResponseTime(1000);

});


