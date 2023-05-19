var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:title', function(req, res, next) {
    const title = req.params.title; 

    const { fs, localdb, dbContent, db, comprimento } = require("../services/pushJSON");
    
    for (let x = 1; x <= comprimento; x++) {
        if (title == db.jogos[`${x}`].titulo) {
            res.render('aboutGame', {title : db.jogos[`${x}`].titulo, desc: db.jogos[`${x}`].desc});
        };
    }
});

module.exports = router;