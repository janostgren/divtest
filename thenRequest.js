var request = require('then-request');
var result;
request('GET', 'http://ticketmonster.apicasystem.com').done(function (res) {
  console.log(res);
  result=res;
});
console.log(result)
