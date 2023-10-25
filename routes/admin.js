var express = require('express');
router = express.Router();

// Get Routers
router.get('/', function(req, res, next){
    res.json("At Admin Dashboard");
});

router.get('/classes', function(req, res, next){
    res.json("List of Classes");
});

router.get('/students', function(req, res, next){
    res.json("List of Students");
});

router.get('/teachers', function(req, res, next){
    res.json("List of Teachers");
})

router.get('/classes/:id', function(req, res, next){
    res.json("Data of specific Class");
});


router.get('/students/:id', function(req, res, next){
    res.json("Data of specific Student");
});

router.get('/teachers/:id', function(req, res, next){
    res.json("Data of specific Teacher");
});



// Post Routers
router.post('/addclass', function(req, res, next){
    res.json("Add Class");
});

router.post('/addstudent', function(req, res, next){
    res.json("Add Student");
});

router.post('/addteacher', function(req, res, next){
    res.json("Add Teacher");
});


// Put Routers
router.put('/assignttoc/:cid:tid', function(req, res, next){
    res.json("Assign teacher to class");
});

router.put('/assignstoc/:cid:tid', function(req, res, next){
    res.json("Assign Student to class");
});

router.put('/assignttoc/:cid:tid', function(req, res, next){
    res.json("Assign teacher to class");
});

router.put('/editteacher/:id', function(req, res, next){
    res.json("Edit Teacher info");
});

router.put('/editstudent/:id', function(req, res, next){
    res.json("Edit student info");
});


// Delete Routes
router.delete('/delclass/:id', function(req, res, next){
    res.json("Delete a class");
});

router.delete('/delteacher/:id', function(req, res, next){
    res.json("Delete a Teacher");
});

router.delete('/delstudent/:id', function(req, res, next){
    res.json("Delete a Student");
});


module.exports = router;