const supertest = require('supertest');
const expect = require('chai').expect;
const userData = require('../model/schema');
const sinon = require('sinon');
const app = require('../app');
const url = 'http://localhost:8080';
let sinonInsert = sinon.stub(userData, 'create');
let sinonUpdate = sinon.stub(userData, 'update');
let sinonStub = sinon.stub(userData, 'find');
let sinonDelete = sinon.stub(userData,'remove');
describe('GET/ hello', () => {
	it('Respond from get ', (done) => {
		supertest(url)
		.get('/index')
		.expect(200)
		//.send('hello world')
		.end((err, res) => {
			if (err) 
				return done(err);
			else{
				expect(res.text).to.be.equal("hello world");
				done();
			}
		});
	});
});

describe('CRUD validation',() =>{
	before(() => {
		let stubData = [{
			date: '2017-07-12',
			city: 'noida',
			temp: '30',
			humidity: '34',
			real_feel: '34',
			cloud: "sunny",
			img: "src"
		}]
		sinonStub.yields(null, stubData);
	});
	it('Find validation',(done) => {
		supertest(url)
		.get('/')
		.expect(200)
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.end((err, res) => {
			if (err) return done(err);
			expect(res.body[0].date).to.equal('2017-07-12');
			expect(res.body[0].city).to.equal('noida');
			expect(res.body[0].temp).to.equal('30');
			expect(res.body[0].humidity).to.equal('34');
			expect(res.body[0].real_feel).to.equal('34');
			expect(res.body[0].cloud).to.equal('sunny');
			expect(res.body[0].img).to.equal('src');
			sinonStub.restore();
			done();
		});
	});
});

describe('Insert Operations',() =>{
	before(() => {
		let stubData = [{
			date: '2017-07-12',
			city: 'noida',
			temp: '30',
			humidity: '34',
			real_feel: '34',
			cloud: "sunny",
			img: "src"
		}]
		sinonInsert.yields(null, stubData);
	});
	it('Favorite validation',(done) => {
		let user = {
			date: '2017-07-12',
			city: 'noida',
			temp: '30',
			humidity: '34',
			real_feel: '34',
			cloud: "sunny",
			img: "src"
		};
		supertest(url)
		.post('/insert')
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200)
		.send(user)
		.end((err, res) => {
			if (err) return done(err);
			expect(res.body[0].date).to.equal('2017-07-12');
			expect(res.body[0].city).to.equal('noida');
			expect(res.body[0].temp).to.equal('30');
			expect(res.body[0].humidity).to.equal('34');
			expect(res.body[0].real_feel).to.equal('34');
			expect(res.body[0].cloud).to.equal('sunny');
			expect(res.body[0].img).to.equal('src');
			done();
		});
	});
});

describe('Insert Operations',() =>{
	before(() => {
		let stubData = {
			username: 'abhi',
			email: 'abc',
			mobileNo: 123,
			password: '123'
		}
		sinonInsert.yields(null, [stubData]);
	});
	it('Signup validation',(done) => {
		let user = {
			username: 'abhi',
			email: 'abc',
			mobileNo: 123,
			password: '123'
		};
		supertest(url)
		.post('/insert/signup')
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200)
		.send(user)
		.end((err, res) => {
			if (err) return done(err);
			expect(res.body[0].username).to.equal('abhi');
			expect(res.body[0].email).to.equal('abc');
			expect(res.body[0].mobileNo).to.equal(123);
			expect(res.body[0].password).to.equal('123');
			done();
		});
	});
});
/*start update validation*/
describe('Update Testing',(done) =>{
	beforeEach(() => {
		sinonUpdate
		.yields(null, { date: '2017-07-12', city: 'noida',$set : {
			date: '2017-07-12',
			city: 'noida',
			temp: '30',
			humidity: '34',
			real_feel: '34',
			cloud: "sunny",
			img: "src"
		},ok: 1, nModified: 0, n: 0});
		
	});
	it('Update data',(done) => {
		supertest(url)
		.put('/update/2017-07-12/noida/34')
		.expect(200)
		.send({
			date: '2017-07-12',
			city: 'noida',
			temp: '30',
			humidity: '34',
			real_feel: '34',
			cloud: "sunny",
			img: "src"
		})
		.end((err, res) => {
			if(err) return done(err);
			console.log(res.body);
			expect(res.body.ok).to.equal(1);
			expect(res.body.nModified).to.equal(0);
			expect(res.body.n).to.equal(0);
			done();
		});
	});
});/*end update validation*/

describe('Delete Testing',(done) => {
	beforeEach(() => {
		sinonDelete.yields(null, {ok:1, nRemoved: 1, n:1}); 
	});
	it('Delete data',(done) => {
		supertest(url)
		.delete('/delete/2017-07-12/noida')
		.expect(200)
		.end((err, res) => {
			if (err) return done(err);
			expect(res.body.ok).to.equal(1);    
			expect(res.body.nRemoved).to.equal(1);
			expect(res.body.n).to.equal(1);
			done(); 
		});
	});
});