var request = require('request');

if(process.argv[2]) {
  checkCredentials(process.argv[2]);
}
else {
  console.log('Please enter a name.');
  process.exit(0);
}


function checkCredentials(username) {
  var req = {
    url : 'https://www.npmjs.com/~'+username
  }
  request(req, function(err, resp, body) {
    if(err)
      console.log('Some error occured in searching your username.');
    else {
      if(resp.statusCode === 200)
        console.log('The username already exists :(');
      else if(resp.statusCode === 404 || resp.statusCode === 500)
        console.log('The username is available :)');
      else
        console.log('Existence of the username could not be determined by this module. Sorry :(')
    }
  });
}
