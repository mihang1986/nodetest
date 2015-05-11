/**
 * Created by navia on 2015/5/11.
 */
var express = require('express');

var app = express.createServer();
app.get('/', function(req, res) {
    res.send('Welcome to Node Twitter')
})
app.listen(8000);

var tweets = [];

app.post('/send', express.bodyParser(), function(req, res) {
    if (req.body && req.body.tweet) {
        tweets.push(req.body.tweet);
        res.send({status:"ok", message:"Tweet received"});
    } else {
        res.send({status:"nok", message:"No tweet received"});
    }
});

app.get('/tweets', function(req,res) {
    var title = 'Chirpie',
        header = 'Welcome to Chirpie'
    res.render('test', {
        locals: {
            'title': title,
            'header': header,
            'tweets': tweets,
            stylesheets: ['/public/style.css']
        }
    })
});

console.log('server is startup listen on 8000');