var Q = require('q');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var sinon = require('sinon');
var underTest = require('../../model/db');

chai.should();
chai.use(require('chai-things'));
chai.use(chaiAsPromised);

describe('db module', function() {
  var connection = { on: sinon.stub(), once: sinon.stub() };
  var mongoose = { connect: sinon.stub(), connection: connection };

  describe('connect', function() {

    describe('rejects promise on error', function() {
      var errorMessage = 'some error';
      connection.on.withArgs('error')
        .callsArgWith(1, errorMessage);

      var promise = underTest(mongoose).connect();

      it('with correct message', function() {
        return promise.should.be.rejectedWith('Error while connecting to MongoDB: ' + errorMessage);
      });

    });
  });
});
