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
    Class.find({_id:req.params.id}).populate('teacher').populate('students.sid')
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/students/:id", function (req, res, next) {
    Student.find({_id:req.params.id})
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/teachers/:id", function (req, res, next) {
  Teacher.find({_id:req.params.id})
  .exec()
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    console.log(err);
  });
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
    Teacher.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Put Routers
router.put("/assignttoc/:tid/:cid", function (req, res, next) {
  Class.findOneAndUpdate({ _id: req.params.cid }, { teacher: req.params.tid })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/assignstoc/:sid/:cid", function (req, res, next) {
  Class.findOneAndUpdate({ _id: req.params.cid }, 
    { $push: {
        students: {
            sid:req.params.sid
        }
    }
    })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/editteacher/:id", function (req, res, next) {
    Teacher.findOneAndUpdate({ _id: req.params.id }, { name:req.body.name, designation:req.body.designation})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/editstudent/:id", function (req, res, next) {
  Student.findOneAndUpdate({ _id: req.params.id }, { name:req.body.name, rollno:req.body.rollno})
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
});

// Delete Routes
router.delete("/delclass/:id", function (req, res, next) {
  Class.findByIdAndDelete({_id:req.params.id})
  .exec()
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    console.log(err);
  });});

router.delete("/delteacher/:id", function (req, res, next) {
  Teacher.findByIdAndDelete({_id:req.params.id})
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/delstudent/:id", function (req, res, next) {
  Student.findByIdAndDelete({_id:req.params.id})
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
