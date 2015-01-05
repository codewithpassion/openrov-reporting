var Q = require('q');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var sinon = require('sinon');
var underTest = require('../../model/db');

chai.should();
chai.use(require('chai-things'));
chai.use(chaiAsPromised);

describe('db module', function() {

  describe('connect', function() {
    var connection;
    var mongoose;

    beforeEach(function() {
      connection = { on: sinon.stub(), once: sinon.stub() };
      mongoose = { connect: sinon.stub(), connection: connection };
    });

    it('rejects promise on error', function() {
      var errorMessage = 'some error';
      connection.on.withArgs('error')
        .callsArgWith(1, errorMessage);

      var promise = new underTest(mongoose).connect();

      return promise.should.be.rejectedWith('Error while connecting to MongoDB: ' + errorMessage);
    });

    it('resolves promise', function() {
      connection.once.withArgs('open')
        .callsArg(1);

      var promise = new underTest(mongoose).connect();

      return promise.should.become(mongoose);
    });
  });
});
