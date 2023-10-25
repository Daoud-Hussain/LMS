var express = require("express");
router = express.Router();
var Student = require("../models/student");
var Teacher = require("../models/teacher");
var Class = require("../models/class");

// Get Routers
router.get("/", function (req, res, next) {
  res.json("At Admin Dashboard");
});

router.get("/classes", function (req, res, next) {
  Class.find()
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/students", function (req, res, next) {
  Student.find()
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/teachers", function (req, res, next) {
  Teacher.find()
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/classes/:id", function (req, res, next) {
  res.json("Data of specific Class");
});

router.get("/students/:id", function (req, res, next) {
  res.json("Data of specific Student");
});

router.get("/teachers/:id", function (req, res, next) {
  res.json("Data of specific Teacher");
});

// Post Routers
router.post("/addclass", function (req, res, next) {
  Class.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/addstudent", function (req, res, next) {
  Student.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/addteacher", function (req, res, next) {
  res.json("Add Teacher");
});

// Put Routers
router.put("/assignttoc/:cid:tid", function (req, res, next) {
  Class.findOneAndUpdate({ id: req.params.cid }, { teacher: req.params.tid })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/assignstoc/:cid:tid", function (req, res, next) {
  Student.findOneAndUpdate({ id: req.params.cid }, 
    { $push 
    
    })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/assignttoc/:cid:tid", function (req, res, next) {
  res.json("Assign teacher to class");
});

router.put("/editteacher/:id", function (req, res, next) {
  res.json("Edit Teacher info");
});

router.put("/editstudent/:id", function (req, res, next) {
  res.json("Edit student info");
});

// Delete Routes
router.delete("/delclass/:id", function (req, res, next) {
  res.json("Delete a class");
});

router.delete("/delteacher/:id", function (req, res, next) {
  res.json("Delete a Teacher");
});

router.delete("/delstudent/:id", function (req, res, next) {
  Student.delete()
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
