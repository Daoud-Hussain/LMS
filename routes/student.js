var express = require('express');
router = express.Router();

router.get('/', function(req, res, next){
    res.json("At Student Dashboard");
})




module.exports = router;