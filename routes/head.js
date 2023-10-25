var express = require('express');
router = express.Router();

router.get('/', function(req, res, next){
    res.json("At Head Dashboard");
})




module.exports = router;