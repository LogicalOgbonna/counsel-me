const express = require("express");
const router = express.Router();
const passport = require("passport");

const Course = require("../../model/Course");

// @route   GET api/course
// @desc    Get all courses
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.admin) {
      return Course.find({}).then(course => res.json(course));
    } else {
      return res.status(401).json("Unauthorized");
    }
  }
);

// @route   POST api/course
// @desc    POST courses
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.admin) {
      if (req.body) {
        return new Course(req.body)
          .save()
          .then(ca => res.json(ca))
          .catch(err => res.status(400).json(err));
      }
    } else {
      return res.status(401).json("Unauthorized");
    }
  }
);

// @route   POST api/course
// @desc    POST courses
// @access  Public
router.post(
  "/career",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (!req.body.length) {
      return res.json({
        message: "You Did not pass any course"
      });
    }
    const coursecodes = [];
    req.body.map(course => coursecodes.push(course.name));

    if (
      coursecodes.includes("COS101") &&
      coursecodes.includes("COS454") &&
      coursecodes.includes("COS458")
    ) {
      return res.json({
        area: "Artificial Intelligence",
        definition:
          "study of developing a computer system that are able to perform human task that requires human intelligence.",
        course: [
          { name: "Introduction to Computer Science", code: "COS101" },
          { name: "Artificial Intelligence", code: "COS454" },
          { name: "Expert System", code: "COS458" }
        ]
      });
    }

    if (
      coursecodes.includes("COS101") &&
      coursecodes.includes("COS321") &&
      coursecodes.includes("COS322") &&
      coursecodes.includes("COS461") &&
      coursecodes.includes("COS431") &&
      coursecodes.includes("COS457")
    ) {
      return res.json({
        area: "Software theory",
        definition:
          "This is the study of computer network technology & database technology. ",
        course: [
          { name: "Introduction to Computer Science", code: "COS101" },
          { name: "database design I", code: "COS321" },
          { name: "database design II", code: "COS322" },
          { name: "organization of programing language", code: "COS461" },
          { name: "software design", code: "COS431" },
          { name: "computer graphics", code: "COS457" }
        ]
      });
    }

    if (
      coursecodes.includes("COS101") &&
      coursecodes.includes("COS102") &&
      coursecodes.includes("COS201") &&
      coursecodes.includes("COS202") &&
      coursecodes.includes("COS341") &&
      coursecodes.includes("COS321") &&
      coursecodes.includes("COS322") &&
      coursecodes.includes("COS352") &&
      coursecodes.includes("COS342") &&
      coursecodes.includes("COS451") &&
      coursecodes.includes("COS472")
    ) {
      return res.json({
        area: "Software engineering",
        definition:
          "This is the application of engineering methods in development of software in a systematic method.",
        course: [
          { name: "Introduction to Computer Science", code: "COS101" },
          { name: "introduction to computer system", code: "COS102" },
          { name: "computer programming I", code: "COS201" },
          { name: "computer programming II", code: "COS202" },
          { name: "computer architecture I", code: "COS341" },
          { name: "computer architecture II", code: "COS342" },
          { name: "database design I", code: "COS321" },
          { name: "database design II", code: "COS322" },
          { name: "data structure", code: "COS352" },
          { name: "Algorithm", code: "COS451" },
          { name: "Advance digital laboratory", code: "COS472" }
        ]
      });
    }

    if (
      coursecodes.includes("COS101") &&
      coursecodes.includes("COS321") &&
      coursecodes.includes("COS322") &&
      coursecodes.includes("COS461") &&
      coursecodes.includes("COS431") &&
      coursecodes.includes("COS457")
    ) {
      return res.json({
        area: "Software theory",
        definition:
          "This is the study of computer network technology & database technology. ",
        course: [
          { name: "Introduction to Computer Science", code: "COS101" },
          { name: "database design I", code: "COS321" },
          { name: "database design II", code: "COS322" },
          { name: "organization of programing language", code: "COS461" },
          { name: "software design", code: "COS431" },
          { name: "computer graphics", code: "COS457" }
        ]
      });
    }

    if (
      coursecodes.includes("COS101") &&
      coursecodes.includes("COS301") &&
      coursecodes.includes("COS303") &&
      coursecodes.includes("COS333") &&
      coursecodes.includes("COS334") &&
      coursecodes.includes("COS335") &&
      coursecodes.includes("COS415") &&
      coursecodes.includes("COS452") &&
      coursecodes.includes("COS412")
    ) {
      return res.json({
        area: "System Engineering",
        definition:
          "is an interdisciplinary field of engineering and management that focuses on how to design and manage systems",

        course: [
          { name: "Introduction to Computer Science", code: "COS101" },
          { name: "introduction to digital design", code: "COS301" },
          { name: "introduction to microcomputer", code: "COS303" },
          { name: "operating system I", code: "COS333" },
          { name: "operating system II", code: "COS334" },
          { name: "system analysis and design", code: "COS335" },
          { name: "system modeling and simulation", code: "COS415" },
          { name: "computer center management", code: "COS425" },
          { name: "computer performance evaluation", code: "COS412" }
        ]
      });
    }

    if (
      coursecodes.includes("COS101") &&
      coursecodes.includes("COS316") &&
      coursecodes.includes("COS311") &&
      coursecodes.includes("COS411")
    ) {
      return res.json({
        area: "Computer and Network security",
        definition:
          "this is the study of set of rules and configuration design to protect the integrity and accessibility of computer network.",
        course: [
          { name: "Introduction to Computer Science", code: "COS101" },
          { name: "automata theory and formal language", code: "COS316" },
          { name: "numerical method I", code: "COS311" },
          { name: "numerical method II", code: "COS411" }
        ]
      });
    }

    if (
      coursecodes.includes("COS101") &&
      coursecodes.includes("COS413") &&
      coursecodes.includes("COS455") &&
      coursecodes.includes("COS456") &&
      coursecodes.includes("COS464")
    ) {
      return res.json({
        area: "Mobile and internet computing",
        definition:
          " is the study of varieties of device that allow people to access data and information from wherever they are via a mobile device.",
        course: [
          { name: "Introduction to Computer Science", code: "COS101" },
          { name: "Queuing theory", code: "COS413" },
          { name: "data communication and Network I", code: "COS455" },
          { name: "data communication and Network II", code: "COS456" },
          { name: "concurrent programming", code: "COS464" }
        ]
      });
    }

    if (
      coursecodes.includes("COS101") &&
      coursecodes.includes("COS315") &&
      coursecodes.includes("COS414") &&
      coursecodes.includes("COS457")
    ) {
      return res.json({
        area: "Real-world computing",
        definition:
          " is the study of tech that processes human information capacity such as pattern recognition and handling of incomplete info.",
        course: [
          { name: "Introduction to Computer Science", code: "COS101" },
          { name: "operation research I", code: "COS315" },
          { name: "operation research II", code: "COS414" },
          { name: "computer graphics", code: "COS457" }
        ]
      });
    }

    if (
      coursecodes.includes("COS101") &&
      coursecodes.includes("COS413") &&
      coursecodes.includes("COS455") &&
      coursecodes.includes("COS456") &&
      coursecodes.includes("COS464")
    ) {
      return res.json({
        area: "Mobile and internet computing",
        definition:
          " is the study of varieties of device that allow people to access data and information from wherever they are via a mobile device.",
        course: [
          { name: "Introduction to Computer Science", code: "COS101" },
          { name: "Queuing theory", code: "COS413" },
          { name: "data communication and Network I", code: "COS455" },
          { name: "data communication and Network II", code: "COS456" },
          { name: "concurrent programming", code: "COS464" }
        ]
      });
    }

    if (
      coursecodes.includes("COS101") &&
      coursecodes.includes("COS222") &&
      coursecodes.includes("COS452") &&
      coursecodes.includes("COS311") &&
      coursecodes.includes("COS411")
    ) {
      return res.json({
        area: "theoretical computer science",
        definition:
          " This is a subset of computer science that focuses on mathematical topics as they relate to practical and modern day computational techniques",
        course: [
          { name: "Introduction to Computer Science", code: "COS101" },
          { name: "introduction to file processing", code: "COS222" },
          { name: "computer center management", code: "COS452" },
          { name: "numerical method I", code: "COS311" },
          { name: "numerical method II", code: "COS411" }
        ]
      });
    }
  }
);
module.exports = router;
