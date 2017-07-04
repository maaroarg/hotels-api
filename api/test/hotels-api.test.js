/**
 * Hotels Api - Test
 *
 * @module
 * @author Mario Romero
 */

const should = require('chai').Should();
const request = require('supertest');
const app = require('../api/app');

describe('Hotels', () => {

  it('Should get all Hotels', (done) => {

    request(app)
      .get('/api/hotels')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body[0].should.have.property('name');
        res.body[1].id.should.equal(2);
        done();
      });
  });

  // it('Should get a Hotel', (done) => {
  //
  //   request(app)
  //     .get('/api/hotel/1')
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .end((err, res) => {
  //       should.not.exist(err);
  //       res.body.should.have.property('id');
  //       res.body.id.should.equal(1);
  //       done();
  //     });
  // });
  //
  // it('Should post a Hotel', (done) => {
  //
  //   request(app)
  //     .post('/api/hotel')
  //     .send({
  //       "name": "Hotel TEST",
  //       "stars": "5",
  //       "price": "1000",
  //       "images": [
  //         "image1",
  //         "image2"
  //       ]
  //     })
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .end((err, res) => {
  //       should.not.exist(err);
  //       res.body.should.have.property('name');
  //       done();
  //     });
  // });
  //
  // it('Should put a Hotel', (done) => {
  //
  //   request(app)
  //     .put('/hotel/4')
  //     .send({
  //       id: 4,
  //       name: 'Other Thing'
  //     })
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .end((err, res) => {
  //       should.not.exist(err);
  //       res.body.should.have.property('id');
  //       res.body.id.should.equal(4);
  //       done();
  //     });
  // });
  //
  // it('Should get Error when delete Hotel', (done) => {
  //
  //   request(app)
  //     .delete('/hotel/4')
  //     .expect('Content-Type', /json/)
  //     .expect(501)
  //     .end((err, res) => {
  //       should.not.exist(err);
  //       res.body.should.have.property('message');
  //       res.body.message.should.equal('Funcionalidad no implementada');
  //       done();
  //     });
  // });

});
