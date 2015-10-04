var fs = require('fs'),
path = require('path');

module.exports = function(imageName,options) {
  var mapString = fs.readFileSync(path.join(__dirname,'../partials/amis',imageName));
  var map = JSON.parse(mapString);
  return map[this.s3.region].ami;
};
