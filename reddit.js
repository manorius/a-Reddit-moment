var reddit = require('redditor');
 
reddit.get('/r/funny.json', function(err, response) {
    if(err) throw err;
    console.log(response.data.children[0].data); // response is a Javascript object 
});