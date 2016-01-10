var express = require('express');
var router = express.Router();

var ig = require('instagram-node').instagram();
ig.use({ "client_id": "1b008c58ad2f403491b8a64106a1ef60", "client_secret": "027d177ded0641aab6a9c6fce00e2ec6" });

// GET home page
router.get('/', function(req, res, next) {
    ig.media_popular(function(err, media, limit) {
        if (err) { throw err; } // THIS LINE KEEPS GIVING SYNTAXERROR: UNEXPECTED TOKEN < error!!

        var urls = [];
        for(var i = 0; i < media.length; i++) {
            urls.push(media[i].images.standard_resolution.url);
        }

        res.render('popular', {urls: urls.join(", ")});
    });

});

module.exports = router;