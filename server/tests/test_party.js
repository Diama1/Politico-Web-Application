import mocha from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';
const should = chai.should();

chai.use(chaiHttp);


describe('Party Creation',() => {
    it('should create a political party', (done) => {
        chai.request(server)
        .post('/api/v1/parties')
        .send({
			name: "Green Party",
			slogan: "We are here for the country",
			logoUrl: "green.png"
		})
		
		.end((err, res) => {
			res.should.have.status(201);
            res.body.should.be.an('object');
			done();
        
        })

    });
    it('should not create a political party', (done) => {
        chai.request(server)
        .post('/api/v1/parties')
        .send({
			name: "",
			slogan: "We are here for the country",
			logoUrl: "green.png"
		})
		
		.end((err, res) => {
			res.should.have.status(400);
            res.body.should.be.an('object');
			done();
        
        })

    });
    it('should not create a political party with an empty field', (done) => {
        chai.request(server)
        .post('/api/v1/parties')
        .send({
			
			slogan: "We are here for the country",
			logoUrl: "green.png"
		})
		
		.end((err, res) => {
			res.should.have.status(400);
            res.body.should.be.an('object');
			done();
        
        })

    });
    

})
