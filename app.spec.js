const request = require("supertest");
const app = require("./app");

describe('POST /addSymbols', function () {
    it('addSymbols for stock ticker', function (done) {
        request(app)
            .post('/stock/addSymbol')
            .send({
                "symbol": ["AMZN", "NFLX"]
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });

    it('get stock ticker for added symbols', function (done) {
        request(app)
            .get('/stock/ticker')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.length).toBe(2);
                done();
            })
            .catch(err => done(err))
    });
});