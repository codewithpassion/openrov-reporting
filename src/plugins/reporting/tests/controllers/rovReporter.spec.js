var Q = require('q');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var sinon = require('sinon');
var underTest = require('../../controllers/rovReporter');

chai.should();
chai.use(require('chai-things'));
chai.use(chaiAsPromised);

describe('rovReporter module', function() {

  describe('append', function() {

    var rovDto = {
      "installedPackages": [],
      "rovInformation": { "bbSerial": "aaa123"},
      "location": {}
    }



  });
});