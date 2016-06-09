var express = require('express');
var router = express.Router();

router.get('/', function ( req, res ) {
    res.type('text/html');
    res.send('<h1>We &lt;3 you!</h1>')
});

module.exports = router;