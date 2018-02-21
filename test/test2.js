const supertest = require('supertest');
const expect = require('chai').expect;

describe('REST API', () => {
  let server;

  before((done) => {
    require('../rest/rest');

    setTimeout(() => {
      server = supertest.agent('http://localhost:3000');
      done();
    }, 1000);
  });

  it('Тестируем добавление пользователя', done => {
    server
      .post('/api/v1/users/Anatoly/score/20')
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      })
  });

  it('Тестируем удаление пользователя', done => {
    server
      .delete('/api/v1/users/Egor/')
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  })
});